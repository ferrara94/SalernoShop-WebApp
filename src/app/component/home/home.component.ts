import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogged:boolean;

  constructor(private router: ActivatedRoute) {
    this.isLogged = false;
   }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      if(params.get('isLogged')) {
        console.log(params.get('isLogged'))
        this.isLogged = Boolean(params.get('isLogged'));
      }
    });
  }

}
