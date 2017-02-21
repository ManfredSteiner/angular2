import { Component } from '@angular/core';

import { Logger }      from '../logger.service';
import { UserService } from '../user.service';

@Component({
  selector: 'part1',
  template: `
    <h2>{{title}}</h2>
    <div style="margin:1em 1em 1em 3em;">
      Tutorial: <a href="{{url}}" target="blank">{{url}}</a>
      <part1-car1 class="part1-car1"></part1-car1>
      <part1-car2 class="part1-car2"></part1-car2>
      <part1-car3 class="part1-car3"></part1-car3>
      <part1-car4 class="part1-car4"></part1-car4>
    </div>
  `,
  styles: [`
    .part1-car1 { color: black; }
    .part1-car2 { color: red; }
    .part1-car3 { color: green; }
    .part1-car4 { color: blue; }
   `],
  providers: [
    Logger,
    UserService
  ]
})
export class PartComponent {
  title = 'Part 1: Why dependency injection';
  url = 'https://angular.io/docs/ts/latest/guide/dependency-injection.html#why-dependency-injection-';
}
