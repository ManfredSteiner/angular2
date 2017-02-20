import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeroListComponent }  from '../heroes/hero-list.component';
import { HeroesComponent }  from '../heroes/heroes.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, HeroesComponent, HeroListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }