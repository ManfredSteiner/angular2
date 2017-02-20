import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-component',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <my-heroes class="heroes"></my-heroes>
  `,
  styles: [`
    .heroes {
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'Dependency Injection and Services';
}
