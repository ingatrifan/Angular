import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Intrebari } from '../../modele/Intrebari';


@Component({
  selector: 'app-raspuns',
  templateUrl: './raspuns.component.html',
  styleUrls: ['./raspuns.component.css']
})
export class RaspunsComponent implements OnInit {
  private admin:any;
  private user:any;
  intrebari=Intrebari;
  constructor(private af:AngularFireDatabase) { }

  ngOnInit() {
    this.af.object('/admin').valueChanges().subscribe(admin=>{
      this.admin=admin;
    });
    this.af.object('/user').valueChanges().subscribe(user =>{
      this.user=user;
    });
  }
  raspAdmin(e){
    e.preventDefault();
    var raspuns=e.target.elements[0].value;

      var rand=Math.floor(Math.random()*4)+1;

      if (this.intrebari[this.admin.Index].id==rand)
      { if (this.intrebari[this.admin.Index].id==4)
          rand=3; else 
          rand=rand+1;
      }
    this.af.object('/admin').update( {Intreb:raspuns,OK:rand});
  }

}
