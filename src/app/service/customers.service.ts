import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../class/CustomerClass';
import { LogInService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  username: string;
  password: string;

  constructor(public http: HttpClient,
    private loginService: LogInService) {
    this.username = loginService.getUsername();
    this.password = loginService.getPassword();
}

  getCustomers() :Observable<Customer[]> {
    const headers = new HttpHeaders(
      { Authorization: 'Basic ' + btoa(this.username + ':' + this.password) }
  );
    return this.http.get<Customer[]>('http://localhost:8080/api/users/a/get/all',
    {headers});
  }

}
