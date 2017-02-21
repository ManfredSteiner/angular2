import { Injectable, Optional } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Logger } from '../logger.service';

@Injectable()
export class HeroService {

  // Logger in part4 is not provided!!
  constructor (@Optional() private logger: Logger) { }
    
  getHeroes () {
    if (this.logger)
      this.logger.log('part4/heroes: Getting heroes ...');
    else
      console.log("part4/heroes: logger is null -> logger not provided by Angular 2");
    return HEROES; 
  }
}