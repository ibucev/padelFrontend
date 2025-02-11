import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pair } from '../../../models/pair.model';
import { PadelService } from '../../../services/padel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-pair',
  imports: [CommonModule, FormsModule],
  templateUrl: './select-pair.component.html',
  styleUrl: './select-pair.component.scss'
})
export class SelectPairComponent {
  @Input() pairs: Pair[];
  @Output() pairSelected = new EventEmitter<Pair>;

  searchPair: string = "";


  filteredPairs(searchText: string) {
    return this.pairs.filter(pair =>
      `${pair.player1.firstname}`.toLowerCase().startsWith(searchText.toLowerCase()) ||
      `${pair.player1.lastname}`.toLowerCase().startsWith(searchText.toLowerCase()) ||
      `${pair.player2.firstname}`.toLowerCase().startsWith(searchText.toLowerCase()) ||
      `${pair.player2.lastname}`.toLowerCase().startsWith(searchText.toLowerCase()));
  }

  selectPair(pair: Pair) {
    this.pairSelected.emit(pair);
    this.searchPair = `${pair.player1.fullName} - ${pair.player2.fullName}`;
  }

  
}
