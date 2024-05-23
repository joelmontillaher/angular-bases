import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h3>
  Counter Component: {{ counter }}
</h3>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetBy(0)">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent  {
  constructor() { }
public counter:number = 0

increaseBy(value:number):void {
  this.counter += value;
}
resetBy(value:number):void {
  this.counter = value
}
}
