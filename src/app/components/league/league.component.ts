import { Component } from '@angular/core';
import { PairDto } from '../../models/pair/pair-dto.model';
import { PairService } from '../../services/pair.service';
import { LeagueService } from '../../services/league.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-league',
  imports: [CommonModule],
  templateUrl: './league.component.html',
  styleUrl: './league.component.scss'
})
export class LeagueComponent {
  pairs: PairDto[];
  selectedPairs: number[] = [];
  

  constructor(private pairService: PairService,
    private leagueService: LeagueService) {}

  ngOnInit() {
    this.getPairList();
  }

  private getPairList() {
    this.pairService.getPairsList().subscribe(data => {
      this.pairs = data;
    });
  }

  selectPair(pairId: number) {
    const index = this.selectedPairs.indexOf(pairId);
    if (index === -1) {
      this.selectedPairs.push(pairId);
    } else {
      this.selectedPairs.splice(index, 1);
    }
  }

  createLeague() {
    const leagueRequest = { pairs: this.selectedPairs };
    console.log(this.selectedPairs);
    this.leagueService.createLeague(leagueRequest).subscribe({
      next: data => {
        console.log("League created");
      },
      error: error => {
        console.error("League creation failed", error);
      },
    });
  }
}
