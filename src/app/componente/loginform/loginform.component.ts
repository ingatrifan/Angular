import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {UserAdminService} from '../../servicii/user-admin.service'

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router : Router, private user:UserAdminService) { }

  ngOnInit() {
  }
  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if (username == 'admin' && password == 'admin'){
      this.user.setUserLoggedIn();
      this.router.navigate(['/dashboard']);
    } else window.alert("Username : admin , password: admin");
    return false;
  }

}
