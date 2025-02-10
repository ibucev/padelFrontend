import { Component } from '@angular/core';
import { Pair } from '../../../models/pair.model';
import { PadelService } from '../../../services/padel.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayerListComponent } from '../../player-list/player-list.component';
import { Player } from '../../../models/player';
import { PairsCreatePairModalComponent } from "../pairs-create-pair-modal/pairs-create-pair-modal.component";

@Component({
  selector: 'app-pairs-list',
  imports: [CommonModule, FormsModule, PairsCreatePairModalComponent],
  templateUrl: './pairs-list.component.html',
  styleUrl: './pairs-list.component.scss'
})
export class PairsListComponent {
  pairs: Pair[];
  players: Player[];
  searchPair: string = '';
  showModal: boolean = false;

  constructor(private padelService: PadelService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPairList();
    this.getPlayerList();
  }

  private getPairList() {
    this.padelService.getPairsList().subscribe(data => {
      this.pairs = data;
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
      `${pair.player1.firstname}`.toLowerCase().startsWith(this.searchPair.toLowerCase()) ||
      `${pair.player1.lastname}`.toLowerCase().startsWith(this.searchPair.toLowerCase()) ||
      `${pair.player2.firstname}`.toLowerCase().startsWith(this.searchPair.toLowerCase()) ||
      `${pair.player2.lastname}`.toLowerCase().startsWith(this.searchPair.toLowerCase()));
  }

  createPair(pair: { player1: Player; player2: Player }) {
    console.log('Pair Created:', pair);
    this.showModal = false;
    this.padelService.createPair(pair.player1.id, pair.player2.id).subscribe(
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
