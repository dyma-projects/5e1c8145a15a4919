import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  interpolation: string = 'Interpolation de variable';
  pbinding: string = "property binding";

  constructor() { }

  ngOnInit() {
  }

  handleClick():void {
    alert('button click');
  }

}
