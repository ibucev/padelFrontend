import { Component } from '@angular/core';
import { MatchService } from '../../../services/match.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectPairComponent } from "../../pairs/select-pair/select-pair.component";
import { CreateMatch } from '../../../models/create-match.model';
import { PairService } from '../../../services/pair.service';
import { PairDto } from '../../../models/pair/pair-dto.model';

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

  pairs: PairDto[];
  selectedPair1: number;
  selectedPair2: number;


  constructor(private matchService: MatchService,
    private pairService: PairService
  ) { }

  ngOnInit() {
    this.getPairs();
  }

  getPairs() {
    this.pairService.getPairsList().subscribe(data => {
      this.pairs = data;
    })
  }

  handlePairSelection1(pair: PairDto) {
    this.selectedPair1 = pair.id;
  }

  handlePairSelection2(pair: PairDto) {
    this.selectedPair2 = pair.id;
  }

  addMatchResult() {
    this.match.firstPair = this.selectedPair1;
    this.match.secondPair = this.selectedPair2;
    this.matchService.createMatch(this.match).subscribe({
      next: data => {
        console.log("Match created");
      },
      error: error => {
        console.error("Match creation failed", error);
      },
    });
  }
}
