import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CodeInputModule } from 'angular-code-input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activate-player',
  imports: [CodeInputModule, CommonModule],
  templateUrl: './activate-player.component.html',
  styleUrl: './activate-player.component.scss'
})
export class ActivatePlayerComponent {

  message: string = "";
  isOkay: boolean = true;
  submitted: boolean = false;

  constructor(private authService: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log("Unutar activatePlayer componente");

  }

  onCodeCompleted(token: string){
    this.confirmAccount(token);
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  private confirmAccount(token: string) {
  this.authService.activateAccount(token).subscribe({
    next: () => {
      this.message = "Your account has been activated!";
      this.submitted = true;
      this.isOkay = true;
    },
    error: (error) => {
      console.error("Activation error:", error);
      this.message = "Token has expired or is invalid.";
      this.submitted = false;
      this.isOkay = false;
    }
  });
  }
}
