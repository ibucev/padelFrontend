import { Component } from '@angular/core';
import { PadelService } from '../../services/padel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../models/player';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player-edit',
  imports: [FormsModule],
  templateUrl: './player-edit.component.html',
  styleUrl: './player-edit.component.scss'
})
export class PlayerEditComponent {
  id: number;
  player: Player;

  constructor(private padelService: PadelService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.player = new Player();
    this.padelService.getPlayerById(this.route.snapshot.params['id']).subscribe(data => {
      this.player = data;
      console.log(this.player)
    });
  }

  onSubmit() {
    this.padelService.editPlayer(this.player.id, this.player).subscribe({
      next: data => {
        console.log('Player updated successfully', data);
        this.goToPlayerList();
      },
      error: error => {
        console.error('Error updating player', error);
      }
    });
  }

  goToPlayerList() {
    this.router.navigate(['players']);
  }

}
