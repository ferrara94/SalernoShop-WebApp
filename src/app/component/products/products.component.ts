import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductsService } from '../../service/products.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = new Array();

  foodStuff: MenuItem[];
  
  constructor(public pService: ProductsService) {

      this.foodStuff = [
        {
            label:'Products', icon:'pi pi-fw pi-book',
            items:[
                {
                    label:'Add',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Pasta', icon:'pi pi-fw pi-bookmark'
                    },
                    { 
                      label:'Fish', icon:'pi pi-fw pi-video'
                    },

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
        },
        {
            label:'Food Stuff',
            icon:'pi pi-fw pi-apple',
            items:[
                {
                    label:'Pasta', icon:'pi pi-fw pi-file-o'
                },
                {
                    label:'Fish', icon:'pi pi-fw pi-file-o'
                },
                {
                    label:'Chocolate', icon:'pi pi-fw pi-file-o'
                },
                {
                    label:'Water', icon:'pi pi-fw pi-file-o'
                },
                {
                  label:'All', icon:'pi pi-fw pi-file-o'
              }

            ]
        }
        
    ];

   }

  ngOnInit(): void {
    this.pService.downloadProducts().subscribe(res => {
      this.products = res;
    });
  }

}
