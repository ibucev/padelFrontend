import { Routes } from '@angular/router';
import { ActivatePlayerComponent } from './components/activate-player/activate-player.component';
import { LeagueComponent } from './components/league/league.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesListComponent } from './components/matches/matches-list/matches-list.component';
import { PairsListComponent } from './components/pairs/pairs-list/pairs-list.component';
import { PlayerEditComponent } from './components/player-edit/player-edit.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerViewComponent } from './components/player-view/player-view.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
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
