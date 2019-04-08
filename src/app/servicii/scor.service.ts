import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScorService {

  private scorA = new BehaviorSubject<number>(0);
  private scorU = new BehaviorSubject<number>(0);
  private timer = new BehaviorSubject<number>(10);
  castScorA = this.scorA.asObservable();
  castScorU = this.scorU.asObservable();
  castTime = this.timer.asObservable();
  constructor() { }
  public setScorAdmin(scor : number){
    this.scorA.next(scor);
  }
  public setScorUser(scor:number){
    this.scorU.next(scor);
  }
  public setTimemm(time:number){
    this.timer.next(time);
  }
}
