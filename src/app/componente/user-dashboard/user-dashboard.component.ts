import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { Player } from '../../modele/Players';
import { PlayersService } from '../../servicii/players.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  
  @Input () type : 'playerUSER';

  public playerUSER: Player = {
    Nickname: "",
    HaveaPhoto:false,
    Photo:null
  }
  constructor(private router : Router, private service : PlayersService) { }
  
  ngOnInit() {
  }
  loginUser(e){
    e.preventDefault();
    console.log(e);
    this.service.SetPlayerUser(this.playerUSER);
    this.playerUSER = {Nickname :"" , HaveaPhoto : false , Photo : null}
    
    var cod= e.target.elements[1].value;
    console.log(cod);
    if (cod == '123456'){
      this.router.navigate(['/user-game']);
    }
    return false;
  }

}
