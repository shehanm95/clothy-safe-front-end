import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AppUser, UserRegistrationService } from '../../service/user-registration.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);
  authService = inject(AuthService);
  userService = inject(UserRegistrationService)
  register: boolean = false;

  registerFunc(reg: boolean) {
    this.register = reg;
  }


  registerFrom(registerFrom: NgForm) {
    console.log(registerFrom.value);
    if (!registerFrom.valid) {
      alert("form is not valid");
    }
    this.userService.registerUser(registerFrom.value).subscribe((user: AppUser) => {
      this.login(user);
    },
      (error) => {
        console.error('Login failed', error);
      }
    );


  }
  submit(form: NgForm) {
    this.userService.getUser(form.value.username, form.value.password).subscribe((user: AppUser) => {

      if (user) {
        this.login(user);

      } else {
        alert("please enter a valid user")
      }
      console.log(user);
    },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  login(user: AppUser) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.authService.login();
    this.router.navigate(['/products']);
  }
}
