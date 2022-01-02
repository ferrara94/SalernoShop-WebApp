import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductsService } from '../../service/products.service';
import {MenuItem} from 'primeng/api';
import { ExportToCsv } from 'export-to-csv';

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
                            label:'Products', icon:'pi pi-fw pi-file',
                            routerLink: '/addproducts'
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
        },
        {
            label:'Food Stuff',
            icon:'pi pi-fw pi-apple',
            items:[
                {
                    label:'Pasta', icon:'pi pi-fw pi-file-o',
                    command: () => this.getPasta()
                },
                {
                    label:'Fish', icon:'pi pi-fw pi-file-o',
                    command: () => this.getFish()
                },
                {
                    label:'Chocolate', icon:'pi pi-fw pi-file-o',
                    command: () => this.getChocolate()
                },
                {
                    label:'Water', icon:'pi pi-fw pi-file-o',
                    command: () => this.getWater()
                },
                {
                    label:'All', icon:'pi pi-fw pi-file-o',
                    command: () => this.getAll()
              }

            ]
        },
        {
          label:'Export',
          icon:'pi pi-fw pi-download',
          items:[
              {
                  label:'CSV', icon:'pi pi-fw pi-file-o',
                  command: () => this.getCsv()
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

  getPasta(){
    this.pService.downloadPastaProducts().subscribe(res => {
        this.products = res;
        let img = document.getElementById('icon-i');
        img?.setAttribute('src',"assets/images/icons/pasta-icon.png");
        
      });
  }

  getFish(){
    this.pService.downloadFishProducts().subscribe(res => {
        this.products = res;
        let img = document.getElementById('icon-i');
        img?.setAttribute('src',"assets/images/icons/fish-icon.png");
        
      });
  }

  getWater(){
    this.pService.downloadWaterProducts().subscribe(res => {
        this.products = res;
        let img = document.getElementById('icon-i');
        img?.setAttribute('src',"assets/images/icons/water-bottle-icon.png");
        
      });
  }

  getAll(){
    this.pService.downloadProducts().subscribe(res => {
        this.products = res;
        let img = document.getElementById('icon-i');
        img?.setAttribute('src',"assets/images/icons/foodstuffb.png");
        
      });
  }

  getChocolate(){
    this.pService.downloadChocolateProducts().subscribe(res => {
        this.products = res;
        let img = document.getElementById('icon-i');
        img?.setAttribute('src',"assets/images/icons/water-bottle-icon.png");
        
      });
  }

  getCsv(){
    console.log("csv")
        
      const options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true, 
        showTitle: true,
        title: 'Products List',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
        // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
      };

      const csvExport = new ExportToCsv(options);
      csvExport.options.filename = "products";
      csvExport.generateCsv(this.products);
  }

  reloadProducts() {
     console.log('reload')
  }

}
