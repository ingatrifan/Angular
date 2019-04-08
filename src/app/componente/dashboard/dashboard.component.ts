import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from '../../servicii/players.service';
import { Player } from '../../modele/Players';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router , private service : PlayersService) { }
 

  @Input() type : 'playerADMIN';
  public playerADMIN : Player = {
    Nickname:"",
    HaveaPhoto:false,
    Photo:null
  } ;

  ngOnInit() {
  }

  AdminPress(e){
    e.preventDefault();
    console.log(e);
    this.service.SetPlayerAdmin(this.playerADMIN);
    this.playerADMIN = {Nickname :"" , HaveaPhoto : false , Photo : null}
    window.alert("Codul este : 123456");
    this.router.navigate (['/admin-game']);
    }

}
