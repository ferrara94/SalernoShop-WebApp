import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) {
        
   }

   downloadProducts() :Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/rest/items/all/json');
  }
}
