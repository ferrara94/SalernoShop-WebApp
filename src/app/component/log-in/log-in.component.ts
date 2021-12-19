import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LogInService } from 'src/app/service/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  in: MenuItem[];
  out: MenuItem[];
  showPassword: boolean;
  isLogged: boolean;
  role: string;

  username: string;
  password: string;

  constructor(
    private loginService: LogInService,
    private toasts: ToastrService) {

    this.in = [
      { label:'Enter Credentials' }
    ];
    this.out = [
      { label:'You are Looged' }
    ];
    this.showPassword = false;

    this.username = "";
    this.password = "";
    this.isLogged = false;
    this.role = "";
   }

   showPass(){
     this.showPassword = !this.showPassword;
   }

  ngOnInit(): void {
    
  }

  logOut(){}

  logIn() {
    this.loginService.setUserCredential(this.username,this.password);
    this.loginService.logIn().subscribe(res => {
      if(res) {
        this.isLogged = true;
        this.role = res['role'];
        this.loginService.setLoggedFlag(true);
        this.toasts.success('You are logged', 'GREAT!')
      }
      else {
        this.toasts.error('Credentials not valid!', 'ERROR'); 
      }
    });    
  }

}
