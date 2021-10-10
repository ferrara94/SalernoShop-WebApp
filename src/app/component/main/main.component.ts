import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  navItems!: MenuItem[];
  
  constructor() { }

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
        routerLink: '/products'
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
      {
        label: 'Log In', icon: 'pi pi-fw pi-user', 
        //command: () => this.logInF()
      },
      {
        label:'Log Out', icon:'pi pi-fw pi-power-off', 
        //command: () => this.logOutF()
      }
    ];

  }

  aboutF() {
    alert("click on about");
  }

  homeF() {
    alert("click on home");
  }

  productsF() {
    alert("click on products");
  }


}
