import { Component, OnInit } from '@angular/core';
import { ScorService } from '../../servicii/scor.service';
import { Intrebari } from '../../modele/Intrebari'
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-user-game',
  templateUrl: './user-game.component.html',
  styleUrls: ['./user-game.component.css']
})
export class UserGameComponent implements OnInit {

  public _index=0;
  public time=10;
  intrebari = Intrebari;
  admin:any;
  user:any;
  constructor( private _scor:ScorService , 
    private router : Router,private af:AngularFireDatabase ) { 
  
    }  
  
  ngOnInit() {
  
    this.af.object('/admin').valueChanges().subscribe(admin =>{
      this.admin=admin;
    });
    this.af.object('/user').valueChanges().subscribe(user =>{
      this.user=user;
    });
  }
  press(i){

    console.log(i);
    this._scor.SetPressUser(1);
    console.log(this.user.Index);
    if (i+1 == this.intrebari[this.user.Index].id ){
      if (this.user.Index>14) this._scor.setScorUser(this.user.Scor+30); else
      if (this.user.Index>9) this._scor.setScorUser(this.user.Scor+20); else
      this._scor.setScorUser(this.user.Scor+10);
    }
    if (this.admin.OK == i + 1 ){
      if (this.user.Index>14) this._scor.setScorAdmin(this.admin.Scor+15); else
      if (this.user.Index>9) this._scor.setScorAdmin(this.admin.Scor+10); else
      this._scor.setScorAdmin(this.admin.Scor+5);
    }
    if (this.user.Index+1 ==20 )
      this.router.navigate(['/winner']);
      
    if (this.admin.Press==1)
    {
      this._scor.SetIndexUser(this.user.Index+1);
      this._scor.SetIntrebUser(0);
      this._scor.SetPressUser(0);
      this._scor.SetIndexAdmin(this.user.Index+1);
      this._scor.SetIntrebAdmin(0);
      this._scor.SetPressAdmin(0);
    } else window.alert("Oponentul inca nu a ales");
  
  }
  
}
