import { Component, Inject } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'part4',
  template: `
    <h2>Part 4: Optional dependencies</h2>
    <div style="margin:1em 1em 1em 3em;">
      Tutorial: <a href="{{url}}" target="blank">{{url}}</a>
    <div>
      <part4-heroes></part4-heroes>
    </div>
  `
})
export class PartComponent { 
  url = "https://angular.io/docs/ts/latest/guide/dependency-injection.html#optional-dependencies";
  
}