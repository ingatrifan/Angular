import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  admin:any;
  user:any;
  constructor( private router : Router, private af:AngularFireDatabase) { }

  ngOnInit() {
    this.af.object('/admin').valueChanges().subscribe(admin =>{
      this.admin=admin;
    });
    this.af.object('/user').valueChanges().subscribe(user =>{
      this.user=user;
    });
  }
  

}
