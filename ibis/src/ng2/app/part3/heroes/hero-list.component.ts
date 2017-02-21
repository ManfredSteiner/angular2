import { Component }   from '@angular/core';

import { Hero }      from './hero';
import { HeroService } from './hero.service';
import { UserService } from '../../user.service';
import { Logger } from '../../logger.service';
import { heroServiceFactory } from './hero.service.provider';

@Component({
  selector: 'token-hero-list',
  providers: [ 
    { provide: HeroService, useFactory: heroServiceFactory, deps: [Logger, UserService] }
  ],
  template: `
  <div *ngFor="let hero of heroes">
    {{hero.id}} - {{hero.name}}
  </div>
  `
})
export class HeroListComponent {
  heroes: Hero[];

  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }
}