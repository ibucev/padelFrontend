import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../models/authentication-request.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errorMessage: string;

  authenticationRequest: AuthenticationRequest = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService,
      private router: Router
    ) {}



  ngOnInit() {
    if(this.authService.getToken()){
      this.goToDashboard();
    }
  }

  onSubmit() {
    this.login();
  }

  login() {
    this.authService.authenticate(this.authenticationRequest).subscribe({
      next: (authenticationResponse) => {
        console.log('Token received:', authenticationResponse.token);
        this.authService.saveToken(authenticationResponse.token);
        this.goToDashboard();
      },
      error: (error) => {
        console.error('Login failed:', error.error);
        this.errorMessage = error.error.businessErrorDescription
      },
    });    
  }

  goToDashboard() {
    this.router.navigate(["players"]);
  }

  navigateToRegister() {
    this.router.navigate(["register"]);
  }
}
