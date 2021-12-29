import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';
import { ProductC } from '../class/ProductClass';
import { LogInService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  username: string;
  password: string;

  constructor(public http: HttpClient,
    private loginService: LogInService) {
        this.username = loginService.getUsername();
        this.password = loginService.getPassword();
   }

  downloadProducts() :Observable<Product[]> {
    const headers = new HttpHeaders(
        { Authorization: 'Basic ' + btoa(this.username + ':' + this.password) }
    );
    return this.http.get<Product[]>(
        'http://localhost:8080/api/products/u/rest/items/all/json',
        {headers});
  }

  downloadPastaProducts() :Observable<Product[]> {
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(this.username + ':' + this.password) }
  );
    return this.http.get<Product[]>('http://localhost:8080/api/products/u/rest/items/pasta/json',
    {headers});
  }

  downloadWaterProducts() :Observable<Product[]> {
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(this.username + ':' + this.password) }
  );
    return this.http.get<Product[]>('http://localhost:8080/api/products/u/rest/items/water/json',
    {headers});
  }

  downloadFishProducts() :Observable<Product[]> {
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(this.username + ':' + this.password) }
  );
    return this.http.get<Product[]>('http://localhost:8080/api/products/u/rest/items/fish/json',
    {headers});
  }

  downloadChocolateProducts() :Observable<Product[]> {
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(this.username + ':' + this.password) }
  );
    return this.http.get<Product[]>('http://localhost:8080/api/products/u/rest/items/chocolate/json',
    {headers});
  }
  
  sendProduct(p: ProductC): Observable<ProductC> {
    
    const headers = {'content-type': 'application/json',
    Authorization: 'Basic ' + btoa(this.username + ':' + this.password)};
    const body = JSON.stringify(p);

    console.log("json: ",body)

    return this.http.post<ProductC>('http://localhost:8080/api/products/a/rest/items/add/product'
    ,body, {'headers':headers});

  }

}
