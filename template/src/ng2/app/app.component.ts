import { Component } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'app-component',
  template: `
    <div class="container">
      <h1>{{this.title}}</h1>
    </div>
  `,
  styleUrls: ['css/app/app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Application';
}
