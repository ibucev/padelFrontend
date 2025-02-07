import { Component } from '@angular/core';
import { RegistrationRequest } from '../../models/registration-request.model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registrateRequest: RegistrationRequest = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  constructor(private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.register();
  }

  register() {
    this.authService.registrate(this.registrateRequest).subscribe({
      next: data => {
        console.log("Player registrated");
        this.goToActivate();
      },
      error: error => {
        console.error('Register failed:', error);
      },
    });
  }

  goToActivate() {
      this.router.navigate(['activate-player']);
  }
  
}
