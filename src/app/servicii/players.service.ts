
import { Injectable } from '@angular/core';
import { Player } from '../modele/Players'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  
  private PlayerAdmin = new BehaviorSubject< Player >( 
    {
      Nickname:"PiticulCelRau",
      HaveaPhoto:false,
      Photo:null
    }
  )
  private PlayerUser =new BehaviorSubject< Player> ( 
    {
      Nickname:'PiticulCelBun',
      HaveaPhoto:false,
      Photo:null
    }
  )
  private index : number;
   
  castA = this.PlayerAdmin.asObservable();
  castS = this.PlayerUser.asObservable();
  constructor() { }
 
  public SetPlayerAdmin( player : Player) {
    this.PlayerAdmin.next(player);
  }

  public SetPlayerUser( player : Player) {
    this.PlayerUser.next(player);
  }
  public SetIndex( Index: number){
    this.index = Index;
  }
  public GetIndex(Index : number){
    return this.index;
  }

}
