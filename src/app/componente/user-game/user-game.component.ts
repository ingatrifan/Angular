import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../servicii/players.service';
import { Player } from '../../modele/Players';
import { ScorService } from 'src/app/servicii/scor.service';
import { Intrebari } from '../../modele/Intrebari'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-game',
  templateUrl: './user-game.component.html',
  styleUrls: ['./user-game.component.css']
})
export class UserGameComponent implements OnInit {

  public PlayerAdmin : Player ;
  public PlayerUser : Player ;
  public scorA : number;
  public scorU : number;
  public index=0;
  public time=10;
  intrebari = Intrebari;
  constructor(private _playersserv : PlayersService, private _scor:ScorService ,private router: Router) { }  
  ngOnInit() {
    this._playersserv.castA.subscribe(PlayerAdmin =>this.PlayerAdmin = PlayerAdmin);
    this._playersserv.castS.subscribe(PlayerUser =>this.PlayerUser = PlayerUser);
    this._scor.castScorA.subscribe(scorA => this.scorA = scorA);
    this._scor.castScorU.subscribe(scorU =>this.scorU = scorU);
    this._scor.castTime.subscribe(time=>this.time=time);
  }
  press(i){
    //e.preventDefault();
    console.log(i);
    
    if (i+1 == this.intrebari[this.index].id ){
      if (this.index>14) this._scor.setScorUser(this.scorU+30); else
      if (this.index>9) this._scor.setScorUser(this.scorU+20); else
      this._scor.setScorUser(this.scorU+10);
    }
    this.index++;
    if (this.index ==20) this.router.navigate(['/winner']);
  }
  

}
