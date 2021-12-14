import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LogInService } from 'src/app/service/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  stuff: MenuItem[];
  showPassword: boolean;

  username: string;
  password: string;

  constructor(private loginService: LogInService) {

    this.stuff = [
      { label:'Enter Credentials' }
    ];
    this.showPassword = false;

    this.username = "";
    this.password = "";
   }

   showPass(){
     this.showPassword = !this.showPassword;
   }

  ngOnInit(): void {
    
  }

  logIn() {
    console.log(this.username,this.password);
    this.loginService.setUserCredential(this.username,this.password);
  }

}
