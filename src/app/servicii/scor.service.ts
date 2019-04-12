import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ScorService {

  constructor(private af:AngularFireDatabase) { }
  
  public setScorAdmin(scor : number){
    this.af.object('/admin').update( {Scor:scor});
  }
  public setScorUser(scor:number){
    this.af.object('/user').update( {Scor:scor});
  }

  public SetIndexAdmin( Index: number){
    this.af.object('/admin').update( {Index:Index});
    
  }
  public SetIndexUser( Index : number){
    this.af.object('/user').update( {Index: Index});
}
  public SetIntrebAdmin(x : number){
    this.af.object('/admin').update( {OK:0,Intreb:"Altceva"});
  }
  public SetIntrebUser(x : number){
    this.af.object('/user').update( {OK:0,Intreb:"Altceva"});
  }
  public SetPressAdmin(x : number){
    this.af.object('/admin').update( {Press:x});
  }
  public SetPressUser(x : number){
    this.af.object('/user').update( {Press:x});
  }

  

}
