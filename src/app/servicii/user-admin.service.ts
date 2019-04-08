import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {
  private isUserLoggedIn;

  constructor() {
    this.isUserLoggedIn=true;
   }
   setUserLoggedIn(){
     this.isUserLoggedIn=true;
   }
   getUserLoggedIn(){
     return this.isUserLoggedIn;
   }
}
