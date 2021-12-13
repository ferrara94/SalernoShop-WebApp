import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  stuff: MenuItem[];
  showPassword: boolean;
  password: string;

  constructor() {
    this.stuff = [
      { label:'Enter Credentials' }
    ];
    this.showPassword = false;
    this.password = "";
   }

   showPass(){
     this.showPassword = !this.showPassword;
   }

  ngOnInit(): void {
    
  }

}
