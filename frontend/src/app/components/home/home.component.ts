import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    {
      title: 'Heart Health',
      description: 'State-of-the-art cardiology diagnostics and care.',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Neurology',
      description: 'Comprehensive brain and nervous system assessments.',
      icon: 'fas fa-brain'
    },
    {
      title: 'General Checkups',
      description: 'Personalized health evaluations and preventive care.',
      icon: 'fas fa-stethoscope'
    }
  ];
}
