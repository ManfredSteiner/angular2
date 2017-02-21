import { Car } from './car';
import { Engine } from './engine';
import { Tires } from './tires';

// BAD pattern!
export class CarFactory {
  createCar() {
    let car = new Car();
    car.description = 'Factory';
    return car;
  }

  createEngine() {
    return new Engine();
  }

  createTires() {
    return new Tires();
  }
}