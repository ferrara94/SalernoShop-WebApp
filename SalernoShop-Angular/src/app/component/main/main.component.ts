import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
      private toasts: ToastrService,
      private dialog: MatDialog
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
        command: () => this.customerF()
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
        command: () => this.logOutF()
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

  logOutF(){
    if(this.loginService.getLoggedFlag()){
      this.toasts.success("You left successfully","GoodBye")
      this.loginService.setLoggedFlag(false);
      this.loginService.removeUser();
      this.router.navigate(['/home',
      {
        isLogged: false  
      }
    ]);
    }else {
      this.toasts.warning('You are not logged in!', 'Attention!');
    }
  }

  productsF() {
    if(this.loginService.getLoggedFlag()){
      this.router.navigateByUrl('/products');
    } else {
      this.toasts.warning(`Credentials not entered! You must be logged in`, 'Attention!'); 
    }
  }

  customerF(){
    if(this.loginService.getLoggedFlag()){
      if(this.loginService.getRole() == "ADMIN"){
        this.router.navigateByUrl('/customers');
      } else {
        this.toasts.warning(`You have no permission to view this page`, 'Attention!'); 
      }        
    } else {
      this.toasts.warning(`Credentials not entered! You must be logged in`, 'Attention!'); 
    }
  }


}
