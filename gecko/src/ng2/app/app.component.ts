import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { Message } from '../shared/message';
import { BuiltInDirectivesComponent } from './template-syntax.components';

@Component({
  selector: 'app-component',
  template: `
    <h1 id="top">Angular 2 - Project Gerbil / Template Syntax</h1>
    <p>See tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html"
       target="_blank">https://angular.io/docs/ts/latest/guide/template-syntax.html</a>
    <h2>Table of content</h2>
    <div class="toc">
      <a href="#interpolation">1) InterpolationComponent</a><br>
      <a href="#new-mental-model">2) NewMentalModelComponent</a><br>
      <a href="#property-binding">3) PropertyBindingComponent</a><br>
      <a href="#attribute-class-style-binding">4) AttributeClassStyleBindingComponent</a><br>
      <a href="#event-binding">5) EventBindingComponent</a><br>
      <a href="#custom-Events">6) CustomEventsComponent</a><br>
      <a href="#two-way-binding">7) TwoWayBindingComponent</a><br>
      <a href="#model-binding">8) NgModelBindingComponent</a><br>
      <a href="#built-in-directives">9) BuiltInDirectivesComponent</a><br>
      <div class="toc2">
        <a href="#directive-class">9.1) NgClassComponent</a><br>
        <a href="#directive-style">9.2) NgStyleComponent</a><br>
        <a href="#directive-if">9.3) NgIfComponent</a><br>
        <a href="#directive-switch">9.4) NgSwitchComponent</a><br>
        <a href="#directive-for">9.5) NgForComponent</a><br>
        <a href="#directive-track-by">9.6) NgForTrackByComponent</a><br>
      </div>
      <a href="#template-reference-variables">10) TemplateReferenceVariablesComponent</a><br>
      <a href="#input-output-properties">11) InputAndOutputPropertiesComponent</a><br>
      <a href="#aliasing-input-output">12) AliasingInputOutputComponent</a><br>
      <a href="#template-expression-operators">13) TemplateExpressionOperatorsComponent</a><br>
    </div>
    <h2>The components</h2>
    <div id=interpolation class="component">
      <interpolation-component></interpolation-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>
    
    <div id=new-mental-model class="component">
      <new-mental-model-component></new-mental-model-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>
    
    <div id=property-binding class="component">
      <property-binding-component></property-binding-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>
    
    <div id=attribute-class-style-binding class="component">
      <attribute-class-style-binding-component></attribute-class-style-binding-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>

    <div id=event-binding class="component">
      <event-binding-component (updateMessage)="setMessage($event)"></event-binding-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>

    <div id=custom-Events class="component">
      <custom-events-component></custom-events-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>

    <div id=two-way-binding class="component">
      <two-way-binding-component></two-way-binding-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>

    <div id=model-binding class="component">
      <ng-model-binding-component></ng-model-binding-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>

    <div id=built-in-directives class="component">
      <built-in-directives-component></built-in-directives-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>

    <div id=template-reference-variables class="component">
      <template-reference-variables-component></template-reference-variables-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>

    <div id=input-output-properties class="component">
      <input-and-output-properties-component></input-and-output-properties-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>

    <div id=aliasing-input-output class="component">
      <alias-input-output-component></alias-input-output-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>

    <div id=template-expression-operators class="component">
      <template-expression-operators-component></template-expression-operators-component>
    </div>
    <div class="to-top"><a href="#top">top</a></div>
  `
})
export class AppComponent implements OnInit { 
  ngOnInit() {
    console.log("ngOnInit()");
  }
}
