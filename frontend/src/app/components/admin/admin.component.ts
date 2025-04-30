import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  users = [
    { id: 1, name: 'Dr. Amal Ben Ali', email: 'amal@example.com', role: 'Doctor' },
    { id: 2, name: 'Omar Scanner', email: 'omar@scanner.io', role: 'Technician' },
    { id: 3, name: 'Admin One', email: 'admin@site.com', role: 'Admin' },
  ];

  searchTerm = '';

  filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  editUser(user: any) {
    alert(`Editing user: ${user.name}`);
    // Implement real editing logic here (e.g., form modal)
  }
}
