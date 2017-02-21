import { Component, OnInit } from '@angular/core';

import { APP_CONFIG, AppConfig, HERO_DI_CONFIG } from './app.config';
import { Logger }                from './logger.service';
import { UserService }           from './user.service';

@Component({
  selector: 'app-component',
  template: `
    <h1>{{title}}</h1>
    <div class="part1"><part1></part1></div>
    <div class="part2"><part2></part2></div>
    <div class="part3"><part3></part3></div>
    <div class="part4"><part4></part4></div>
  `,
  styles: [`
    .part1 { padding: 0 0 0 0; }
    .part2, .part3, .part4 { padding: 1em 0 0 0; }
   `],
  providers: [
    Logger,
    UserService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ]
})
export class AppComponent {
  title = 'Angular dependency injection';
}
