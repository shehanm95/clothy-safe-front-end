import { EventEmitter, Injectable } from '@angular/core';
import { AppUser } from './user-registration.service';

// auth.service.ts
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  clearUser() {
    localStorage.removeItem('currentUser')
  }

  private isAuthenticated = false;

  loginStatus = new EventEmitter()

  login() {
    this.isAuthenticated = true; // Log the user in
    this.loginStatus.emit(true);
  }

  logout() {
    this.isAuthenticated = false;
    console.log("loggedOut");
    this.loginStatus.emit(false); // Log the user out
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated; // Check if logged in
  }

  loadUserData(): AppUser | null {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return JSON.parse(currentUser);
    } else {
      return null;
    }
  }
}
