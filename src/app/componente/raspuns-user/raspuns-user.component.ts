import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Intrebari } from '../../modele/Intrebari'


@Component({
  selector: 'app-raspuns-user',
  templateUrl: './raspuns-user.component.html',
  styleUrls: ['./raspuns-user.component.css']
})
export class RaspunsUserComponent implements OnInit {
  private user:any;
  private admin:any;
  intrebari=Intrebari;
  constructor(private af:AngularFireDatabase) { }

  ngOnInit() {
    this.af.object('/user').valueChanges().subscribe(user =>{
      this.user=user;
    });
    this.af.object('/admin').valueChanges().subscribe(admin=>{
      this.admin=admin;
    });
  }
  raspUser(e){
    e.preventDefault();
    var raspuns=e.target.elements[0].value;
    
      var rand=Math.floor(Math.random()*4)+1;

      if (this.intrebari[this.user.Index].id==rand)
      {
        if (this.intrebari[this.user.Index].id==4)
          rand=3; else rand++;
      }
    this.af.object('/user').update( {Intreb:raspuns,OK:rand});
  }


}
