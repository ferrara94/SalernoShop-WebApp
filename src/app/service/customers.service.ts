import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../class/CustomerClass';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(public http: HttpClient) { }

  getCustomers() :Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/api/users/a/get/all');
  }

}
