import { Component } from '@angular/core';
import { Player } from '../../models/player';
import { PadelService } from '../../services/padel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../../services/match.service';
import { MatchResult } from '../../models/match-result.model';
import { CommonModule } from '@angular/common';
import { SetResult } from '../../models/set-result.model';

@Component({
  selector: 'app-player-view',
  imports: [CommonModule],
  templateUrl: './player-view.component.html',
  styleUrl: './player-view.component.scss'
})
export class PlayerViewComponent {
  id: number;
  player: Player;
  matches: MatchResult[];
  setResult: SetResult[];
  
  constructor(private padelService: PadelService,
    private matchService: MatchService, 
    private route: ActivatedRoute
  ) {}
    
    
  ngOnInit() {
    this.player = new Player();
    this.padelService.getPlayerById(this.route.snapshot.params['id']).subscribe(data => {
      this.player = data;
      this.getMatches();
    });
  }

  public getMatches() {
    this.matchService.getMatchesListByPlayer(this.player.id).subscribe(data => {
      this.matches = data;
      console.log(this.matches)
    });
  }
}
