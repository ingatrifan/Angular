import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../servicii/players.service';
import { Player } from '../../modele/Players';
import { ScorService } from 'src/app/servicii/scor.service';
import { Intrebari } from '../../modele/Intrebari';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.css']
})
export class AdminGameComponent implements OnInit {

  public PlayerAdmin : Player ;
  public PlayerUser : Player ;
  public scorA : number;
  public scorU : number;
  public _index=0;
  public time=10;
  intrebari = Intrebari;
  
  constructor(private _playersserv : PlayersService, private _scor:ScorService , 
    private router : Router ) { }  
  
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
    
    if (i+1 == this.intrebari[this._index].id ){
      if (this._index>14) this._scor.setScorAdmin(this.scorA+30); else
      if (this._index>9) this._scor.setScorAdmin(this.scorA+20); else
      this._scor.setScorAdmin(this.scorA+10);
    }
    this._index++;
    this._playersserv.SetIndex(this._index);
    if (this._index ==20) this.router.navigate(['/winner']);
  }
  
  

}
