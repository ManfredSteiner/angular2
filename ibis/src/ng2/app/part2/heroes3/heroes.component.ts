import { Component } from '@angular/core';

import { heroServiceProvider } from './hero.service.provider';

@Component({
  selector: 'part2-heroes3',

  providers: [
    // https://angular.io/docs/ts/latest/guide/dependency-injection.html#factory-providers
    heroServiceProvider
  ],
  template: `
  <h3>part2/heroes3: Heroes 3</h3>
  <div style="margin:1em 1em 1em 3em;">
    <part3-heroes3-list></part3-heroes3-list>
  </div>
  `
})
export class HeroesComponent { }