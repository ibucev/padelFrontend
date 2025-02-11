import { Component } from '@angular/core';
import { Match } from '../../../models/match.model';
import { MatchService } from '../../../services/match.service';
import { Set } from '../../../models/set.model';
import { Pair } from '../../../models/pair.model';
import { PadelService } from '../../../services/padel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectPairComponent } from "../../pairs/select-pair/select-pair.component";
import { MatchResult } from '../../../models/match-result.model';
import { CreateMatch } from '../../../models/create-match.model';

@Component({
  selector: 'app-matches-create',
  imports: [CommonModule, FormsModule, SelectPairComponent],
  templateUrl: './matches-create.component.html',
  styleUrl: './matches-create.component.scss'
})
export class MatchesCreateComponent {
  match: CreateMatch = {
    firstPair: 1,
    secondPair: 2,
    setResults: [ 
      { setNumber: 1, firstPairResult: 0, secondPairResult: 0 },
      { setNumber: 2, firstPairResult: 0, secondPairResult: 0 },
      { setNumber: 3, firstPairResult: 0, secondPairResult: 0 }
    ]
  };

  pairs: Pair[];
  selectedPair1: number;
  selectedPair2: number;


  constructor(private padelService: PadelService) { }

  ngOnInit() {
    this.getPairs();
  }

  getPairs() {
    this.padelService.getPairsList().subscribe(data => {
      this.pairs = data;
    })
  }

  handlePairSelection1(pair: Pair) {
    this.selectedPair1 = pair.id;
  }

  handlePairSelection2(pair: Pair) {
    this.selectedPair2 = pair.id;
  }

  addMatchResult() {
    this.match.firstPair = this.selectedPair1;
    this.match.secondPair = this.selectedPair2;
    this.padelService.createMatch(this.match).subscribe({
      next: data => {
        console.log("Match created");
      },
      error: error => {
        console.error("Match creation failed", error);
      },
    });
  }
}
