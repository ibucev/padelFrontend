import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayerDto } from '../../../models/player/player-dto.model';

@Component({
  selector: 'app-pairs-create-pair-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './pairs-create-pair-modal.component.html',
  styleUrl: './pairs-create-pair-modal.component.scss'
})
export class PairsCreatePairModalComponent {
  @Input() players: PlayerDto[] = [];

  @Output() closeModal = new EventEmitter<void>();
  @Output() createPair = new EventEmitter<{ player1: PlayerDto; player2: PlayerDto }>();

  searchPlayer1: string = "";
  searchPlayer2: string = "";

  selectedPlayer1: PlayerDto;
  selectedPlayer2: PlayerDto;

  constructor() {}

  submitPair() {
    if (this.selectedPlayer1 && this.selectedPlayer2 && this.selectedPlayer1 !== this.selectedPlayer2) {
      this.createPair.emit({ player1: this.selectedPlayer1, player2: this.selectedPlayer2 });
      this.closeModal.emit();
    }
  }

  filteredPlayers(searchText: string) {
    return this.players.filter(player =>
      `${player.firstName}`.toLowerCase().startsWith(searchText.toLowerCase()) ||
      `${player.lastName}`.toLowerCase().startsWith(searchText.toLowerCase()));
  }

  selectPlayer1(player: PlayerDto) {
    this.selectedPlayer1 = player;
    this.searchPlayer1 = `${player.firstName} ${player.lastName}`;
  }

  selectPlayer2(player: PlayerDto) {
    this.selectedPlayer2 = player;
    this.searchPlayer2 = `${player.firstName} ${player.lastName}`;
  }
}
