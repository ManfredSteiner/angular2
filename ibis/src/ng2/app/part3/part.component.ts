import { Component, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig } from '../app.config';
// https://angular.io/docs/ts/latest/guide/dependency-injection.html#dependency-injection-tokens

import { UserService } from '../user.service';

@Component({
  selector: 'part3',
  template: `
    <h2>{{title}}</h2>
    <div style="margin:1em 1em 1em 3em;">
      Tutorial: <a href="{{url}}" target="blank">{{url}}</a>
      <part3-heroes></part3-heroes>
    </div>  `
})
export class PartComponent { 
  title = 'Part 3: Dependency injection tokens';
  url = "https://angular.io/docs/ts/latest/guide/dependency-injection.html#dependency-injection-tokens";

}