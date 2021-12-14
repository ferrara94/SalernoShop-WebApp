import { Injectable } from '@angular/core';
import { UserCredential } from '../class/UserClass'; 
@Injectable({
  providedIn: 'root'
})
export class LogInService {

  user: UserCredential;

  constructor() {
    this.user = new UserCredential;
   }

  logIn() {
    if(this.getUsername() && this.getPassword()) return true;
    return false;
  }

  setUserCredential(username: string, password: string) {
    this.user.username = username;
    this.user.password = password;
  }

  getUsername() {
    return this.user.username;
  }

  getPassword() {
    return this.user.password;
  }

  getUserCredential() {
    return this.user;
  }

}
