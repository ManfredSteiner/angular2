import { Component } from '@angular/core';

import { Car }        from './car';
import { Engine }     from './engine';
import { Tires }      from './tires';
//import { testCar, simpleCar, engine2Car, engine3Car } from './car-creations';

@Component({
  selector: 'part1-car3',
  template: `
  <h3>part1/car3: Cars with Angular 2 dependency injection</h3>
  <div style="margin:0em 0em 0em 2em;">
    <div id="di">{{car.drive()}}</div>
  </div>
  `,
  providers: [Car, Engine, Tires]
})
export class CarComponent {
   constructor(public car: Car) {}
}
