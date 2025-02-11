import { Component } from '@angular/core';
import { MatchService } from '../../../services/match.service';
import { MatchResult } from '../../../models/match-result.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatchesCreateComponent } from "../matches-create/matches-create.component";

@Component({
  selector: 'app-matches-list',
  imports: [CommonModule, MatchesCreateComponent],
  templateUrl: './matches-list.component.html',
  styleUrl: './matches-list.component.scss'
})
export class MatchesListComponent {
  matchesResult: MatchResult[];

  constructor(private matchService: MatchService) {

  }

  ngOnInit() {
    this.getMatches();
    
  }

  public getMatches() {
    this.matchService.getMatchesList().subscribe(data => {
      this.matchesResult = data;
      console.log(this.matchesResult)
    });
  }

}
