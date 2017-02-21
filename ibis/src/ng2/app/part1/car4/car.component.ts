import { Component } from '@angular/core';

import { Car }         from './car';
import { Engine }      from './engine';
import { Tires }       from './tires';
import { useInjector } from './car-injector';

@Component({
  selector: 'part1-car4',
  template: `
  <h3>part1/car4: Cars with Angular 2 dependency injection with Injector</h3>
  <div style="margin:0em 0em 0em 2em;">
    <div id="injector">{{injectorCar.drive()}}</div>
  </div>
  `
})
export class CarComponent {
  injectorCar = useInjector();
}
