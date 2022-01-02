import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interface/product';
import {CardModule} from 'primeng/card';
import { LogInService } from 'src/app/service/login.service';
import { ProductsService } from 'src/app/service/products.service';
import { ProductC } from 'src/app/class/ProductClass';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product!: Product;

  role: string;

  constructor(private router: Router, private loginService: LogInService, private productService: ProductsService) { 
    this.role = this.loginService.getRole();
  }

  ngOnInit(): void {
  }

  deleteProduct(p: ProductC){
    console.log("delete",p.name)
    this.productService.deleteProduct(p).subscribe(res => {
      console.log('res',res)      
    });
    
  }

}
