import { Component, Input, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LogInService } from 'src/app/service/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @Input()
  loggedCondition!: boolean;

  in: MenuItem[];
  out: MenuItem[];
  showPassword: boolean;
  isLogged: boolean;
  role: string;

  username: string;
  password: string;

  constructor(
    private loginService: LogInService,
    private toasts: ToastrService,
    private router: Router) {

    this.in = [
      { label:'Enter Credentials' }
    ];
    this.out = [
      { label:'You are Looged' }
    ];
    this.showPassword = false;

    this.username = "";
    this.password = "";
    this.isLogged = this.loginService.getLoggedFlag();

    this.role = "";
    if(this.isLogged) {
      this.username = this.loginService.getUsername();
      this.role = this.loginService.getRole();
    }
   }

   showPass(){
     this.showPassword = !this.showPassword;
   }

  ngOnInit(): void {
    
  }

  logOut(){
    if(this.loginService.getLoggedFlag()){
      this.toasts.info("You left successfully","GoodBye")
      this.loginService.setLoggedFlag(false);
      this.loginService.removeUser();
      this.isLogged = false;
      this.loginService.setUserCredential("","");
      this.username = "";
      this.password = "";
    }else {
      this.toasts.warning('You are not logged in!', 'Attention!');
    }
  }

  logIn() {
    if(!this.password || !this.username) {
      this.toasts.warning('You have to enter username/password', 'ATTENTION!'); 
    } else {
      this.loginService.setUserCredential(this.username,this.password);
      this.loginService.logIn().subscribe(res => {
        if(res) {
          console.log("logIn", res)
          this.isLogged = true;
          this.role = res['role'];
          this.loginService.setRole(this.role);
          this.loginService.setLoggedFlag(true);
          this.toasts.success('You are logged', 'GREAT!')
          }
        else {
          this.toasts.error('Credentials not valid!', 'ERROR'); 
        }
      });    
    }    
  }

}
