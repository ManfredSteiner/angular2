import { Component } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a href="{{url}}" target="_blank">{{url}}</a>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['css/app/app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  url = 'https://angular.io/docs/ts/latest/tutorial/toh-pt5.html';
}