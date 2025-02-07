import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../../../models/player';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PadelService } from '../../../services/padel.service';

@Component({
  selector: 'app-pairs-create-pair-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './pairs-create-pair-modal.component.html',
  styleUrl: './pairs-create-pair-modal.component.scss'
})
export class PairsCreatePairModalComponent {
  @Input() players: Player[] = [];

  @Output() closeModal = new EventEmitter<void>();
  @Output() createPair = new EventEmitter<{ player1: Player; player2: Player }>();

  searchPlayer1: string = "";
  searchPlayer2: string = "";

  selectedPlayer1: Player;
  selectedPlayer2: Player;

  constructor() {}

  submitPair() {
    if (this.selectedPlayer1 && this.selectedPlayer2 && this.selectedPlayer1 !== this.selectedPlayer2) {
      this.createPair.emit({ player1: this.selectedPlayer1, player2: this.selectedPlayer2 });
      this.closeModal.emit();
    }

  }

  filteredPlayers(searchText: string) {
    return this.players.filter(player =>
      `${player.firstname}`.toLowerCase().startsWith(searchText.toLowerCase()) ||
      `${player.lastname}`.toLowerCase().startsWith(searchText.toLowerCase()));
  }

  selectPlayer1(player: Player) {
    this.selectedPlayer1 = player;
    this.searchPlayer1 = `${player.firstname} ${player.lastname}`; // Fill input with selected name
  }

  selectPlayer2(player: Player) {
    this.selectedPlayer2 = player;
    this.searchPlayer2 = `${player.firstname} ${player.lastname}`; // Fill input with selected name
  }
}
