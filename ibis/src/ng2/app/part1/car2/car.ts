
import { Engine } from './engine';
import { Tires } from './tires';

export class Car {
  public description = 'DI';

  constructor (public engine: Engine, public tires: Tires) { }

  // Method using the engine and tires
  drive () {
    return `${this.description} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }
}

