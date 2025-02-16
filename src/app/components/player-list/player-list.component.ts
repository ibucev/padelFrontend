import { Component } from '@angular/core';
import { PadelService } from '../../services/padel.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Pair } from '../../models/pair.model';
import { FormsModule } from '@angular/forms';
import { PlayerDto } from '../../models/player/player-dto.model';

@Component({
  selector: 'app-player-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {
  players: PlayerDto[];
  pairs: Pair[];
  searchPlayer: string = '';

  constructor(private padelService: PadelService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authService.getToken()) {
      this.getPlayerList();
    } else {
      this.router.navigate(['login']);
    }
  }

  public getPlayerList() {
    this.padelService.getPlayersList().subscribe(data => {
      this.players = data;
    });
  }   

  filteredPlayers() {
    return this.players.filter(player =>
      `${player.firstName}`.toLowerCase().startsWith(this.searchPlayer.toLowerCase()) ||
      `${player.lastName}`.toLowerCase().startsWith(this.searchPlayer.toLowerCase())
    );
  }

  deletePlayer(id: number) {
    this.padelService.deletePlayer(id).subscribe(data => {
      console.log(data);
      this.getPlayerList();
    }, (error) => {
      console.error("Error deleting player: ", error);
      alert(error.error.error);
    });
  }

  editPlayer(id: number) {
    this.router.navigate(['update-player', id]);
  }

  viewPlayer(id: number) {
    this.router.navigate(['view-player', id]);
  }
}
