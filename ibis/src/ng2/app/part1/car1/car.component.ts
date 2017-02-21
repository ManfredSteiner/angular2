import { Component } from '@angular/core';

import { Engine }     from './engine';
import { Tires }      from './tires';
import { Car }        from './car';
import { CarFactory } from './car-factory';

import { testCar, simpleCar, superCar } from './car-creations';

@Component({
  selector: 'part1-car1',
  template: `
  <h3>part1/car1: Cars without dependency injection</h3>
  <div style="margin:0em 0em 0em 2em;">
    <div>{{noDiCar.drive()}}</div>
    <div>{{factoryCar.drive()}}</div>
    <div>{{simpleCar.drive()}}</div>
    <div>{{superCar.drive()}}</div>
    <div>{{testCar.drive()}}</div>
  </div>
  `
})
export class CarComponent {
  noDiCar     = new Car();  
  factoryCar  = (new CarFactory).createCar();
  simpleCar   = simpleCar();
  superCar    = superCar();
  testCar     = testCar();

  constructor () {}
}
