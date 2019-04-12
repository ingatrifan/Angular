import { Component, OnInit } from '@angular/core';
import { ScorService } from '../../servicii/scor.service';
import { Intrebari } from '../../modele/Intrebari';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
 
@Component({
  selector: 'app-admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.css']
})
export class AdminGameComponent implements OnInit {
  public _index=0;
  public time=10;
  intrebari = Intrebari;
  admin:any;
  user:any;
  constructor( private _scor:ScorService , 
    private router : Router,private af:AngularFireDatabase ) { 
  
    }  
  
  ngOnInit() {
    this.af.object('/admin').valueChanges().subscribe(admin=>{
      this.admin=admin;
      console.log(this.admin);
    });
    this.af.object('/user').valueChanges().subscribe(user =>{
      this.user=user;
      console.log(this.user);   
    });
  }

  press(i){
    //e.preventDefault();
    console.log(i);
    this._scor.SetPressAdmin(1);
    this.admin.Index=this.admin.Index;
    console.log(this.admin.Index);
    if (i+1 == this.intrebari[this.admin.Index].id ){
      if (this.admin.Index>14) this._scor.setScorAdmin(this.admin.Scor+30); else
      if (this.admin.Index>9) this._scor.setScorAdmin(this.admin.Scor+20); else
      this._scor.setScorAdmin(this.admin.Scor+10);
    }
    if (i+1 == this.user.OK ){
      if (this.admin.Index>14) this._scor.setScorUser(this.user.Scor+15); else
      if (this.admin.Index>9) this._scor.setScorUser(this.user.Scor+10); else
      this._scor.setScorUser(this.user.Scor+5);
    }
    if (this.admin.Index+1 ==20 )
      this.router.navigate(['/winner']);
    if (this.user.Press ==1 ) 
    {
      this._scor.SetIndexAdmin(this.admin.Index+1);
      this._scor.SetIntrebAdmin(0);
      this._scor.SetPressAdmin(0);
      this._scor.SetIndexUser(this.admin.Index+1);
      this._scor.SetIntrebUser(0);
      this._scor.SetPressUser(0);
      
    } else window.alert("Oponentul inca nu a ales");
    

  
}
  
}
