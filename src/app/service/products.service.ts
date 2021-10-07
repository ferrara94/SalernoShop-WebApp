import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';
import { ProductC } from '../class/ProductClass';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) {
        
   }

  downloadProducts() :Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/rest/items/all/json');
  }

  downloadPastaProducts() :Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/rest/items/pasta/json');
  }

  downloadWaterProducts() :Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/rest/items/water/json');
  }

  downloadFishProducts() :Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/rest/items/fish/json');
  }

  downloadChocolateProducts() :Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/rest/items/chocolate/json');
  }
  
  sendProduct(p: ProductC): Observable<ProductC> {
    
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(p);

    console.log("json: ",body)

    return this.http.post<ProductC>('http://localhost:8080/rest/items/add/product'
    ,body, {'headers':headers});

  }

}
