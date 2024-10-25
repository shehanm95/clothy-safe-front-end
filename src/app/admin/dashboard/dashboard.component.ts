import { Component, Input, OnInit } from '@angular/core';
import { AppUser, UserRegistrationService } from '../../service/user-registration.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  @Input() user?: string;
  constructor(private userService: UserRegistrationService, private router: Router) { }

  allUsers!: AppUser[];
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((appUsers: AppUser[]) => {
      this.allUsers = appUsers;
    });
  }

  editUser(userId: number): void {
    this.router.navigate(['/edit-user', userId]); // Navigate to the EditUserComponent with userId as a parameter
  }

}
