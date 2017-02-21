import { Component } from '@angular/core';

import { Logger }      from '../logger.service';
import { UserService } from '../user.service';

@Component({
  selector: 'part2',
  template: `
    <h2>{{title}}</h2>
    <div style="margin:1em 1em 1em 3em;">
      Tutorial: <a href="{{url}}" target="blank">{{url}}</a>
      <part2-heroes1 class="part2-heroes1"></part2-heroes1>
      <part2-heroes2 class="part2-heroes2"></part2-heroes2>
      <part2-heroes3 class="part2-heroes3"></part2-heroes3>
    </div>
  `,
  styles: [`
    .part2-heroes1 { color: black; }
    .part2-heroes2 { color: red; }
    .part2-heroes3 { color: green; }
   `],
  providers: [
    Logger,
    UserService
  ]
})
export class PartComponent {
  title = 'Part 2: Angular dependency injection';
  url = 'https://angular.io/docs/ts/latest/guide/dependency-injection.html#angular-dependency-injection';
}
