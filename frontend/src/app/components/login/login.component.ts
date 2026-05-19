import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    const userData = {
      email: this.email,
      password: this.password
    };

    this.authService.login(userData).subscribe({

      next: (res) => {

        console.log('Login Success', res);

        this.router.navigate(['/']);

      },

      error: (err) => {

        console.log(err);

        this.errorMessage = 'Invalid email or password';

      }

    });

  }

}