import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { PlayerListComponent } from './app/components/player-list/player-list.component';
import { PlayerEditComponent } from './app/components/player-edit/player-edit.component';
import { LoginComponent } from './app/components/login/login.component';
import { RegisterComponent } from './app/components/register/register.component';
import { ActivatePlayerComponent } from './app/components/activate-player/activate-player.component';
import { PairsListComponent } from './app/components/pairs/pairs-list/pairs-list.component';
import { MatchesListComponent } from './app/components/matches/matches-list/matches-list.component';
import { LeagueComponent } from './app/components/league/league.component';
import { PlayerViewComponent } from './app/components/player-view/player-view.component';

const routes: Routes = [
  { path: 'players', component: PlayerListComponent },
  { path: 'update-player/:id', component: PlayerEditComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'activate-player', component: ActivatePlayerComponent},
  { path: 'pairs', component: PairsListComponent},
  { path: 'matches', component: MatchesListComponent},
  { path: 'league', component: LeagueComponent},
  { path: 'view-player/:id', component: PlayerViewComponent},
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: '**', redirectTo: '/players' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
