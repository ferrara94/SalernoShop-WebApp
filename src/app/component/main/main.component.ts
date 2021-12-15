import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { LogInService } from 'src/app/service/login.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  navItems!: MenuItem[];
  area: any;
  btn: any;

  constructor(
      private router: Router,
      private loginService: LogInService,
      private toasts: ToastrService
  ) { }

  ngOnInit(): void {

    this.navItems = [
      {
        label: 'Salerno Food Shop',icon: PrimeIcons.SHOPPING_CART
      },
      {
        label: '|'
      },
      {
        label: 'Home', icon: 'pi pi-fw pi-home', 
        routerLink: '/home'
      },
      {
        label: 'Products', icon: 'pi pi-pw pi-file', 
        //routerLink: '/products'
        command: () => this.productsF()
      },
      {
        label: 'About', icon: 'pi pi-fw pi-cog', 
        routerLink: '/about'
      },
      {
        label: 'Customers', icon: 'pi pi-fw pi-users',
        routerLink: '/customers'
      }
      ,
      {
        label: '|'
      },
      {
        label: 'User', icon: 'pi pi-fw pi-users', 
      //  command: () => this.userF()
      },
     /*  {
        label: 'Log In', icon: 'pi pi-fw pi-user', 
        command: () => this.logInF()
      }, */
      {
        label:'Log Out', icon:'pi pi-fw pi-power-off', 
        //command: () => this.logOutF()
      }
    ];

  }

  logInF() {
    this.router.navigateByUrl('/logIn');
  }

  aboutF() {
    alert("click on about");
  }

  homeF() {
    alert("click on home");
  }

  productsF() {
    if(this.loginService.logIn()) 
      this.router.navigateByUrl('/products');
    else {
      this.toasts.error('Credentials not entered!', 'ERROR');
      let toast = document.getElementById("toast-container")
      
      console.log("credentials not entered")
    }
  }


}
