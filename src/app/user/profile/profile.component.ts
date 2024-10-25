import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { AppUser, UserRegistrationService } from '../../service/user-registration.service';
import { DashboardComponent } from "../../admin/dashboard/dashboard.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  auth = inject(AuthService);
  router = inject(Router)

  user?: AppUser | null; // You can create a specific interface for type safety


  constructor(private authService: AuthService, private userService: UserRegistrationService) {
    this.user = authService.loadUserData();
  }


  logOut() {
    // Add your logout logic here
    console.log('Logging out...');
    this.authService.logout();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);

    // Remove user data from local storage
  }
  deleteAccount() {
    if (this.user)
      this.userService.deleteUser(this.user.id);
  }
}
