import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interface/product';
import {CardModule} from 'primeng/card';
import { LogInService } from 'src/app/service/login.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product!: Product;

  role: string;

  constructor(private loginService: LogInService) { 
    this.role = this.loginService.getRole();
  }

  ngOnInit(): void {
  }

}
