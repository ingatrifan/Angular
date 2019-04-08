import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../servicii/players.service';
import { Player } from '../../modele/Players';
import { ScorService } from 'src/app/servicii/scor.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  public PlayerAdmin : Player ;
  public PlayerUser : Player ;
  public scorA : number;
  public scorU : number;
  constructor(private _playersserv : PlayersService, private _scor:ScorService , 
    private router : Router) { }

  ngOnInit() {
    this._playersserv.castA.subscribe(PlayerAdmin =>this.PlayerAdmin = PlayerAdmin);
    this._playersserv.castS.subscribe(PlayerUser =>this.PlayerUser = PlayerUser);
    this._scor.castScorA.subscribe(scorA => this.scorA = scorA);
    this._scor.castScorU.subscribe(scorU =>this.scorU = scorU);
  }
  

}
