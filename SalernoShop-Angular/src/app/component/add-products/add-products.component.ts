import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ProductC } from '../../class/ProductClass';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  foodStuff: MenuItem[];

  name: string; 
  price!: string;
  foodSt!: string;
  desc!: string;

  product: ProductC = new ProductC();

  constructor(public pService: ProductsService) {

    this.name = "ds";

    this.foodStuff = [
      { label:'Add Product Form' }
    ];
   }

  ngOnInit(): void {
  }

  addProduct(login: any) {
    this.product.name = this.name;
    this.product.foodstuff = this.foodSt;
    this.product.description = this.desc;
    this.product.price = Number(this.price);
    //console.log(this.product);
    this.pService.sendProduct(this.product).subscribe(res => {
      console.log(res);
    });;
  }

  onDrag(event: any){}

}
