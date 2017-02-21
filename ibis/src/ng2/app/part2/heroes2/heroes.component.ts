import { Component } from '@angular/core';

import { HeroService } from './hero.service';
import { EvenBetterLogger } from './even-better-logger';
import { UserService } from '../../user.service';
import { Logger } from '../../logger.service';


@Component({
  selector: 'part2-heroes2',
  providers: [
    // UserService here not needed when already defined in app.component.ts  
    //UserService, 
    
    // https://angular.io/docs/ts/latest/guide/dependency-injection.html#class-provider-with-dependencies
    { provide: Logger, useClass: EvenBetterLogger },

    // https://angular.io/docs/ts/latest/guide/dependency-injection.html#aliased-class-providers
    //EvenBetterLogger, { provide: Logger, useExisting: EvenBetterLogger },
    
    // https://angular.io/docs/ts/latest/guide/dependency-injection.html#value-providers
    //{ provide: Logger, useValue: { logs: [], log: () => {} } }, // silent logger

    HeroService
  ],
  template: `
  <h3>part2/heroes2: Heroes 2</h3>
  <div style="margin:1em 1em 1em 3em;">
    <part2-heroes2-list></part2-heroes2-list>
  </div>
  `
})
export class HeroesComponent { }