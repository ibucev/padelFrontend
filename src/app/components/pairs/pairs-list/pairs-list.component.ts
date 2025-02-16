import { Component } from '@angular/core';
import { Pair } from '../../../models/pair.model';
import { PadelService } from '../../../services/padel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Player } from '../../../models/player';
import { PairsCreatePairModalComponent } from "../pairs-create-pair-modal/pairs-create-pair-modal.component";
import { PairService } from '../../../services/pair.service';
import { PairDto } from '../../../models/pair/pair-dto.model';
import { PlayerDto } from '../../../models/player/player-dto.model';

@Component({
  selector: 'app-pairs-list',
  imports: [CommonModule, FormsModule, PairsCreatePairModalComponent],
  templateUrl: './pairs-list.component.html',
  styleUrl: './pairs-list.component.scss'
})
export class PairsListComponent {
  pairs: PairDto[];
  players: PlayerDto[];
  searchPair: string = '';
  showModal: boolean = false;

  constructor(private padelService: PadelService,
    private pairService: PairService,
  ) { }

  ngOnInit() {
    this.getPairList();
    this.getPlayerList();
  }

  private getPairList() {
    this.pairService.getPairsList().subscribe(data => {
      this.pairs = data;
      console.log(this.pairs)
    });
  }

  // Duplicated the same method in player-list. Make some utility class? - Refactor!
  private getPlayerList() {
    this.padelService.getPlayersList().subscribe(data => {
      this.players = data;
    })

  }

  filteredPairs() {
    return this.pairs.filter(pair =>
      `${pair.player1.firstName}`.toLowerCase().startsWith(this.searchPair.toLowerCase()) ||
      `${pair.player1.lastName}`.toLowerCase().startsWith(this.searchPair.toLowerCase()) ||
      `${pair.player2.firstName}`.toLowerCase().startsWith(this.searchPair.toLowerCase()) ||
      `${pair.player2.lastName}`.toLowerCase().startsWith(this.searchPair.toLowerCase()));
  }

  createPair(pair: { player1: PlayerDto; player2: PlayerDto }) {
    console.log('Pair Created:', pair);
    this.showModal = false;
    this.pairService.createPair(pair.player1.id, pair.player2.id).subscribe(
      (response) => {
        console.log('Pair created successfully:', response);
        this.getPairList();
      },
      (error) => {
        console.error('Error creating pair:', error);
      }
    );

  }
}
