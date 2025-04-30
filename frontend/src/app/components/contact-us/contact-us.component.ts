import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // Method to handle form submission
  onSubmit(): void {
    if (this.contactForm.invalid) {
      return; // Don't submit if the form is invalid
    }

    this.formSubmitted = true;
    console.log(this.contactForm.value); // You can also handle API logic here if needed.

    // Navigate to the confirmation page
    this.router.navigate(['/confirmation']);
  }
}
