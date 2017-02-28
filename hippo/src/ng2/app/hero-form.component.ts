// Custom Validator
// https://juristr.com/blog/2016/11/ng2-template-driven-form-validators/

import { Component } from '@angular/core';
import { Hero }      from '../shared/hero';

// using absolut path in templateUrl instead of relative path with moduleId
// see https://angular.io/docs/ts/latest/cookbook/component-relative-paths.html
//     http://stackoverflow.com/questions/37178192
//
//declare var module: {
//   id: string;
//}

@Component({
  //moduleId: module.id,
  selector: 'hero-form',
  
  // https://angular.io/docs/ts/latest/guide/forms.html#create-an-initial-html-form-template
  //templateUrl: 'html/app/hero-form-1.component.html'
    
  // https://angular.io/docs/ts/latest/guide/forms.html#add-powers-with-_-ngfor_
  //templateUrl: 'html/app/hero-form-2.component.html'
  
  // https://angular.io/docs/ts/latest/guide/forms.html#two-way-data-binding-with-_ngmodel_
  // two way binding only for name
  //templateUrl: 'html/app/hero-form-3.component.html'
  
  // https://angular.io/docs/ts/latest/guide/forms.html#two-way-data-binding-with-_ngmodel_
  // two way binding for name, ego and power
  templateUrl: 'html/app/hero-form-4.component.html'
  
  // https://angular.io/docs/ts/latest/guide/forms.html#track-control-state-and-validity-with-_ngmodel_
  //templateUrl: 'html/app/hero-form-5.component.html'
  
  // https://angular.io/docs/ts/latest/guide/forms.html#show-and-hide-validation-error-messages
  //templateUrl: 'html/app/hero-form-6.component.html'
  //templateUrl: 'html/app/hero-form-7.component.html'
  
  // https://angular.io/docs/ts/latest/guide/forms.html#toggle-two-form-regions-extra-credit-
  //templateUrl: 'html/app/hero-form-8.component.html'
      
  //templateUrl: 'html/app/hero-form.component.html'
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[2], 'Chuck Overstreet');

  submitted = false;

  onSubmit () {
    console.log("you submitted " + this.diagnostic );
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  // getter in typscript see http://stackoverflow.com/questions/12827266#answer-12827485
  get diagnostic () {
    return JSON.stringify(this.model);
  }

  newHero () {
    this.model = new Hero(42, '', '');
  }
  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls (form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}
