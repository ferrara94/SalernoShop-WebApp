import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  activeState: boolean[] = [true, false, false]

  constructor() { }

  ngOnInit(): void {
  }

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
}

}
