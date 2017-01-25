import { Component } from '@angular/core';
import { Hero } from '../shared/hero';

@Component({
  selector: 'little-tour',
  template: `
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">

    <button (click)=addHero(newHero.value)>Add</button>

    <ul><li *ngFor="let hero of heroes">{{hero.name}}</li></ul>
  `
})

export class LittleTourComponent {
  private heroes : Hero [];
  constructor() {
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(2, 'Bombasto'),
      new Hero(3, 'Magneta'),
      new Hero(4, 'Tornado')
    ];
  } 
  
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(new Hero(this.heroes.length+1, newHero));
      console.log('Now are ' + this.heroes.length + ' heroes registered');
    }
    
  }
}