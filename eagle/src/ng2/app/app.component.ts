import { Component } from '@angular/core';
import { Hero } from '../shared/hero';

@Component({
  selector: 'angular2-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{ myHero.name }}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `
})

export class AppComponent {
  private title: string;
  private heroes : Hero [];
  private myHero : Hero; 
  
  constructor() {
    this.title = 'Angular2 Project Earwig / Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(2, 'Bombasto'),
      new Hero(3, 'Magneta'),
      new Hero(4, 'Tornado')
    ];
    this.myHero = this.heroes[0];
  }
  
}

