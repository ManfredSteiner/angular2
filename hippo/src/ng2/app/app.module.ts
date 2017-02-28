import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component';
import { NameValidator } from './name.validator';
import { ValidatedFormComponent } from './validated-form.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    NameValidator, ValidatedFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }