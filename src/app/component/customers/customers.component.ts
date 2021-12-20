import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { CustomersService } from 'src/app/service/customers.service';
import { Customer } from '../../class/CustomerClass';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerActions: MenuItem[];

  cols: string[] = [];
  customers: Customer[] = [];

  constructor(private service: CustomersService) { 

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

    this.cols = ["userid", "role", "password" , "active"]
    
    this.service.getCustomers().subscribe(res => {
     console.log(res);
     this.customers = res;
    });
  }

}
