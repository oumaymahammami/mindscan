import { Component, inject } from '@angular/core';
import { IntegrationService } from '../../services/integration.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/login-request';
import { Router, RouterLink } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginError: boolean = false;

  constructor(
    private integration: IntegrationService,
    private storage: LocalStorageService
  ) {}

  userForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  router = inject(Router);
  request: LoginRequest = new LoginRequest();

  login() {
    this.loginError = false;
    this.storage.remove('auth-key');

    const formValue = this.userForm.value;

    if (!formValue.username || !formValue.password) {
      this.loginError = true;
      return;
    }

    this.request.username = formValue.username;
    this.request.password = formValue.password;

    this.integration.doLogin(this.request).subscribe({
      next: (res) => {
        console.log("Received Response:" + res.token);
        this.storage.set('auth-key', res.token);
        this.router.navigateByUrl('users'); // 
      },
      error: (err) => {
        console.log("Error Received Response:" + err);
        this.storage.remove('auth-key');
        this.loginError = true;
      }
    });
  }
}
