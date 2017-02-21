import { Component }   from '@angular/core';

import { Hero }      from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'part2-heroes2-list',
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