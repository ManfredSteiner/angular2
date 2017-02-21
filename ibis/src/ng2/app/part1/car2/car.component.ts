import { Component } from '@angular/core';

import { Car }        from './car';
import { Engine }     from './engine';
import { Tires }      from './tires';
import { CarFactory } from './car-factory';
import { testCar, simpleCar, engine2Car, engine3Car } from './car-creations';

@Component({
  selector: 'part1-car2',
  template: `
  <h3>part1/car2: Cars with dependency injection</h3>
  <div style="margin:0em 0em 0em 2em;">
    <div>{{factoryCar.drive()}}</div>
    <div>{{simpleCar.drive()}}</div>
    <div>{{engine2Car.drive()}}</div>
    <div>{{engine3Car.drive()}}</div>
    <div>{{testCar.drive()}}</div>
  </div>
  `
})
export class CarComponent {
  factoryCar  = (new CarFactory).createCar();
  simpleCar   = simpleCar();
  engine2Car  = engine2Car();
  engine3Car  = engine3Car();
  testCar     = testCar();
  
  constructor () {}
}
