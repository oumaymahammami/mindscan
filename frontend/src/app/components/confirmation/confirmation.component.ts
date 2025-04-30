import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  standalone: true,
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  message: string = "Your message has been sent successfully!";

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Navigate back to home page after 3 seconds
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }
}
