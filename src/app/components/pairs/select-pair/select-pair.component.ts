import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pair } from '../../../models/pair.model';
import { PadelService } from '../../../services/padel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PairDto } from '../../../models/pair/pair-dto.model';

@Component({
  selector: 'app-select-pair',
  imports: [CommonModule, FormsModule],
  templateUrl: './select-pair.component.html',
  styleUrl: './select-pair.component.scss'
})
export class SelectPairComponent {
  @Input() pairs: PairDto[];
  @Output() pairSelected = new EventEmitter<PairDto>;

  searchPair: string = "";


  filteredPairs(searchText: string) {
    return this.pairs.filter(pair =>
      `${pair.player1.firstName}`.toLowerCase().startsWith(searchText.toLowerCase()) ||
      `${pair.player1.lastName}`.toLowerCase().startsWith(searchText.toLowerCase()) ||
      `${pair.player2.firstName}`.toLowerCase().startsWith(searchText.toLowerCase()) ||
      `${pair.player2.lastName}`.toLowerCase().startsWith(searchText.toLowerCase()));
  }

  selectPair(pair: PairDto) {
    this.pairSelected.emit(pair);
    this.searchPair = `${pair.player1.firstName} ${pair.player1.lastName} - ${pair.player2.firstName} ${pair.player2.lastName}`;
  }

  
}
