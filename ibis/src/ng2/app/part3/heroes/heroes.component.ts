import { Component, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig } from '../../app.config';

import { UserService } from '../../user.service';

@Component({
  selector: 'part3-heroes',
  template: `
    <h3>part3/heroes: Heroes</h3>
    <div style="margin:1em 1em 1em 3em;">
      Tutorial: <a href="{{url}}" target="blank">{{url}}</a>
      title = {{title}}
      <p id="user">
        {{userInfo}}
        <button (click)="nextUser()">Next User</button>
      <p>
      <token-hero-list id="token-hero-list-authorized" *ngIf="isAuthorized"></token-hero-list>
      <token-hero-list id="token-hero-list-unauthorized" *ngIf="!isAuthorized"></token-hero-list>
    </div>
  `
})
export class HeroesComponent { 
  title: string;
  url = "https://angular.io/docs/ts/latest/guide/dependency-injection.html#dependency-injection-tokens";
  
  constructor(
    @Inject(APP_CONFIG) config: AppConfig,
    private userService: UserService) {
    this.title = config.title;
  }

  get isAuthorized () { return this.user.isAuthorized; }
  get user()          { return this.userService.user; }
  nextUser ()         { this.userService.getNewUser(); }

  get userInfo () {
    return `Current user, ${this.user.name}, is ` +
           `${this.isAuthorized ? '' : 'not'} authorized. `;
  }

}