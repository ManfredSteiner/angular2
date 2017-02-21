import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PartComponent as Part1Component } from './part1/part.component';
import { CarComponent as Car1Component } from './part1/car1/car.component';
import { CarComponent as Car2Component } from './part1/car2/car.component';
import { CarComponent as Car3Component } from './part1/car3/car.component';
import { CarComponent as Car4Component } from './part1/car4/car.component';

import { PartComponent as Part2Component } from './part2/part.component';
import { HeroesComponent as Part2Heroes1HeroesComponent} from './part2/heroes1/heroes.component';
import { HeroListComponent as Part2Heroes1HeroListComponent } from './part2/heroes1/hero-list.component';
import { HeroesComponent as Part2Heroes2HeroesComponent} from './part2/heroes2/heroes.component';
import { HeroListComponent as Part2Heroes2HeroesListComponent } from './part2/heroes2/hero-list.component';
import { HeroesComponent as Part2Heroes3HeroesComponent} from './part2/heroes3/heroes.component';
import { HeroListComponent as Part2Heroes3HeroesListComponent } from './part2/heroes3/hero-list.component';

import { PartComponent as Part3Component } from './part3/part.component';
import { HeroesComponent as Part3HeroesComponent} from './part3/heroes/heroes.component';
import { HeroListComponent as Part3HeroListComponent } from './part3/heroes/hero-list.component';

import { PartComponent as Part4Component } from './part4/part.component';
import { HeroesComponent as Part4HeroesComponent} from './part4/heroes/heroes.component';
import { HeroListComponent as Part4HeroListComponent } from './part4/heroes/hero-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    Part1Component, Car1Component, Car2Component, Car3Component, Car4Component, 
    Part2Component, 
    Part2Heroes1HeroesComponent, Part2Heroes1HeroListComponent, 
    Part2Heroes2HeroesComponent, Part2Heroes2HeroesListComponent,
    Part2Heroes3HeroesComponent, Part2Heroes3HeroesListComponent,
    Part3Component, Part3HeroesComponent, Part3HeroListComponent,
    Part4Component, Part4HeroesComponent, Part4HeroListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }