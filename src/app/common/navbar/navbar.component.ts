import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  authService = inject(AuthService)
  router = inject(Router);
  loggedOut: boolean = this.authService.isLoggedIn();

  toProducts() {
    this.router.navigate(['/products']);
    console.log("clicked")
  }

  showProfile() {
    //this.authService.logout();
    this.router.navigate(['profile']);
  }

  logIn() {
    this.authService.login();
    console.log("clicked")
    this.loggedOut = false;
  }
}
