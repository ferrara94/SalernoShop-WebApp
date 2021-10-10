import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerActions: MenuItem[];

  constructor() { 

    this.customerActions = [
      {
        label:'Customers', icon:'pi pi-fw pi-users',
            items:[
                {
                    label:'Add',
                    icon:'pi pi-fw pi-plus',
                    items:[
                        {
                            label:'Customer', icon:'pi pi-user-plus',
                            routerLink: '/addcustomers'
                        }
                    ]
                },
                {
                    label:'Delete', icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export All ', icon:'pi pi-fw pi-external-link'
                }
            ]
      }
    ];

  }

  ngOnInit(): void {
  }

}
