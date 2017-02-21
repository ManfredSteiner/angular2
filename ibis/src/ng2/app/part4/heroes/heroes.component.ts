import { Component } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  selector: 'part4-heroes',
  providers: [HeroService],
  template: `
  <h3>part4/heroes: Heroes</h3>
  <div style="margin:1em 1em 1em 3em;">
    <div style="margin: 0 0 1em;">Take a look on your browser console (press F12)</div>
    <part4-heroes-list></part4-heroes-list>
  </div>
  `
})
export class HeroesComponent { }