
import { Injectable } from '@angular/core';
import { Player } from '../modele/Players'
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {
 
  user:any;
  admin:any;
  
 
  constructor(private af:AngularFireDatabase) { 
  }

  public SetPlayerAdmin( player : Player) {
    this.af.object('/admin').update( {Name:player.Nickname || "Piticul cel Rau" ,Scor : 0 , Index : 0,Intreb:"Altceva",OK:0});
    this.af.object('/user').update( {name:"Piticul cel Bun" , Scor : 0 , Index : 0,Intreb:"Altceva",OK:0 });

  }

  public SetPlayerUser( player : Player) {
    this.af.object('/user').update( {name:player.Nickname,OK:0});
  }

}
