import { Component } from '@angular/core';

  @Component({
  selector: 'app-component',
  template: `
    <h1>{{title}}</h1>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/user-input.html" target="_blank">
      https://angular.io/docs/ts/latest/guide/user-input.html
    </a>
    <p>
      <click-me></click-me>
    </p>
    <p>
      <click-me2></click-me2>
    </p>
    
    <h4>Give me some keys!</h4>
    <div><key-up1></key-up1></div>

    <h4>keyup loop-back component</h4>
    <div><loop-back></loop-back></div>
    <br><br>

    <h4>Give me some more keys!</h4>
    <div><key-up2></key-up2></div>

    <h4>Type away! Press [enter] when done.</h4>
    <div><key-up3></key-up3></div>

    <h4>Type away! Press [enter] or click elsewhere when done.</h4>
    <div><key-up4></key-up4></div>

    <h4>Little Tour of Heroes</h4>
    <p><i>Add a new hero</i></p>
    <div><little-tour></little-tour></div>
  `
})

export class AppComponent {
  private title: string;
  constructor() {
    this.title = 'Angular2 Project Ferret / User Input';
  }
}
