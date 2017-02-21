import { Component } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  selector: 'part2-heroes1',
  providers: [HeroService],
  template: `
  <h3>part2/heroes1: Heroes 1</h3>
  <div style="margin:1em 1em 1em 3em;">
    <part2-heroes1-list></part2-heroes1-list>
  </div>
  `
})
export class HeroesComponent { }