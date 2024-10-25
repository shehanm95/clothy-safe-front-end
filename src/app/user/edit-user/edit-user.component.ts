import { Component, inject, Input, OnInit } from '@angular/core';
import { AppUser, UserRegistrationService } from '../../service/user-registration.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {

  user!: AppUser;

  constructor(private userService: UserRegistrationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserById(userId).subscribe(user => {
        this.user = user;  // Assuming user is returned in correct format
      });
    }
  }

  onSubmit(): void {
    if (this.user) {
      this.userService.updateUser(this.user).subscribe(() => {
        alert('User updated successfully');
        this.router.navigate(['/dashboard']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/dashboard']);
  }

}
