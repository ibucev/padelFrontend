import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { PadelService } from './services/padel.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'padelFrontend';

  constructor(private authService: AuthService,
    private router: Router) { }

  dropdownVisible = false; 

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  onSelectOption(option: string) {
    console.log('Selected option:', option);
    
    
    // Fix this edit-player does not work it needs player id to edit player
    //Route { path: 'update-player/:id', component: PlayerEditComponent},
    if(option.match("logout")){
      this.authService.clearToken();
    } else if (option.match("editProfile")) {
      console.log("Tu sam prije edit-player")
      this.router.navigate(["edit-player"]);
    }
      
    this.dropdownVisible = false;
  }
}
