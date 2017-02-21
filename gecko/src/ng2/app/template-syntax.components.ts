import { AfterContentInit, Component, Directive, ElementRef,
         EventEmitter, Output, Renderer, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Hero } from '../shared/hero';
import { Message } from '../shared/message';

// ******************************************************************************

@Component({
  selector: 'interpolation-component',
  template: `
    <h2>1) InterpolationComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#interpolation"
                 target="_blank">Angular 2 docs / Interpolation</a>
    <div>
      <p>My current hero is {{currentHero.name}}</p>
      <h3> 
        {{title}}
        <img src="{{heroImageUrl}}" style="height:30px">
      </h3>
      <p>The sum of 1 + 1 is {{1 + 1}}</p>
      <p>The sum of 1 + 1 is not {{1 + 1 + getVal()}}</p>
    </div>
  `
})
export class InterpolationComponent { 
  private title : string;
  private currentHero : Hero;
  private heroImageUrl : string;
  
  constructor () {
    this.title = "Interpolation example";
    this.currentHero = new Hero(1, "Titan", "Strong");
    this.heroImageUrl = "img/titan.png";
  }
  
  getVal () : number {
    return 10;
  }
  
}

// ******************************************************************************

@Component({
  selector: 'new-mental-model-component',
  template: `
    <h2>2) NewMentalModelComponent</h2>
    <p>See: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#a-new-mental-model" target="_blank">Angular 2 doc / A new mental model</a>
    <div>
      <button (click)="toggleDisable()">Toggle the buttons disable property</button>
      <button disabled="false">Does not work</button>
      <button [disabled]="isdisabled">Works</button>
    </div>
  `
})
export class NewMentalModelComponent { 
  private isdisabled: boolean;

  constructor () {
    this.isdisabled = false;
  }
  
  toggleDisable () : void
  {
    this.isdisabled = !this.isdisabled;
  }
}

// ******************************************************************************
// ******************************************************************************

@Component({
  selector: 'property-binding-component',
  template: `
    <h2>3) PropertyBindingComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#property-binding"
                 target="_blank">Angular 2 docs / Property binding</a>
    <div>
      <div class="box">
        Element property <code>&lt;img src=... &gt;</code>
        <button (click)="changeElementProperty()">change</button>
        <img [src]="imageUrl">
      </div>
      
      <div class="box">
        Directive property <code>&lt;div [ngClass]=... &gt;</code>
        <button (click)="changeDirectiveProperty()">change</button>
        <div [ngClass]="directiveClass">
          This is the text in a div, and the div's class is changed.
        </div>
      </div>
      
      <div class="box">
        <p>Custom Component Property
        <button (click)="changeCustomProperty()">change</button>
        <hero-detail-component [hero]="currentHero"></hero-detail-component>
      </div>
    </div>
  `
})
export class PropertyBindingComponent { 
  private imageUrl : string;
  private directiveClass : string;
  private heroes  = [];
  private currentHero : Hero;
  
  constructor () {
    this.imageUrl = "img/flower1.png";
    this.directiveClass = "propBindingGreen";
    this.heroes[0] = new Hero(0, "Titan", "Strong");
    this.heroes[1] = new Hero(1, "Jupiter", "Super Strong");
    this.currentHero = this.heroes[0];
  }
  
  changeElementProperty () : void {
    if (this.imageUrl === "img/flower1.png")
      this.imageUrl = "img/flower2.png"
    else
      this.imageUrl = "img/flower1.png"
  }
  
  changeDirectiveProperty () : void {
    if (this.directiveClass === 'propBindingRed')
      this.directiveClass = "propBindingGreen";
    else
      this.directiveClass = "propBindingRed";
  }
  
  changeCustomProperty () : void {
    let id: number = this.currentHero.id + 1;
    if (id >= this.heroes.length)
      id = 0;
    this.currentHero = this.heroes[id];
  }
}

// ******************************************************************************

@Component({
  selector: 'hero-detail-component',
  template: `
    <div style="margin-top:5px;">
      <p>I am a hero and my name is {{hero.name}} (id {{hero.id}})
    </div>
  `
})
export class HeroDetailComponent { 
  @Input() hero : Hero;
}

// ******************************************************************************
// ******************************************************************************

@Component({
  selector: 'attribute-class-style-binding-component',
  template: `
    <h2>4) AttributeClassStyleBindingComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#attribute-class-and-style-bindings"
                 target="_blank">Angular 2 docs / Attribute, class, and style bindings </a>
    <div>
      <div class="box">
        Attribute binding <code>&lt;td colspan=... &gt;</code>
        <button (click)="changeAttribute()">change header row</button>
        <table border=1>
        <tr><td [attr.colspan]="attributeColspan">Header</td></tr>
        <tr><td>One</td><td>Two</td><td>Three</td><td>Four</td></tr>
        </table>
      </div>
      
      <div class="box">
        Class binding <code>&lt;div class=... &gt;</code>
        <button (click)="changeClass()">change class</button>
        <div class="bad curly special" [class]="badCurly">Press F12 and check class of this element .... </div>
      </div>   
         
      <div class="box">
        Style binding <code>&lt;button [style.font-size.em]=... &gt;</code><br>
        <button (click)="changeStyle()" [style.font-size.em]="styleBindingSize">
          Change size of this button ...
        </button>
      </div>
    </div>
  `
})
export class AttributeClassStyleBindingComponent { 
  private attributeColspan = 1;
  private badCurly : string = "bad";
  private styleBindingSize : number = 1;

  changeAttribute () : void {
      if (this.attributeColspan >= 4)
        this.attributeColspan = 1;
      else
        this.attributeColspan++;
  }
  
  changeClass () : void {
    switch (this.badCurly)
    {
      case "bad":               this.badCurly = "bad curly"; break;
      case "bad curly":         this.badCurly = "bad curly special"; break;
      case "bad curly special": this.badCurly = "bad"; break;
    }
  }
  
  changeStyle () : void {
    let size : number = 1 + ((this.styleBindingSize) % 3);
    this.styleBindingSize = size;
  }
  
}

// ******************************************************************************

@Component({
  selector: 'event-binding-component',
  template: `
    <h2>5) EventBindingComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#event-binding" target="_blank">Angular 2 doc / Event binding</a>
    <div>
      <div class="box">
        <p>Target event <code>&lt;button (click)=... &gt;</code></p>
        <button (click)="increase()">Click to increase</button>
        {{value}}
      </div>
      
      <div class="box">
        <p>$event and event handling statements</p>
        <input [value]="name" (input)="name=$event.target.value" >
           ... {{name}}
      </div>
      
    </div>
  `
})
export class EventBindingComponent { 
  private value : number = 0;  
  private name : string = "Richard";
  
  @Output() updateMessage = new EventEmitter<Message>();
  
  increase(): void {  
    this.value++;
  }
  
  emitEvent() : void {
    this.updateMessage.emit(new Message("New message from EventBindingComponent"));
  }
}

// ******************************************************************************
// ******************************************************************************

@Component({
  selector: 'custom-events-component',
  template: `
    <h2>6) CustomEventsComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#custom-events-with-eventemitter-" target="_blank">Angular 2 doc / Custom events with EventEmitter</a>
    <div class="childcomponent">
      <custom-event-emitter-component (updateMessage)="setMessage($event)"></custom-event-emitter-component>
    </div>
    
    <div class="childcomponent">
      <message-detail-component [message]="message"></message-detail-component>
    </div>
  `
})
export class CustomEventsComponent {
  private message : Message;
  
  constructor () {
    this.message = new Message("message created by CustomEventsComponent constructor");
  }
  
  setMessage (evt) {
    this.message = evt;
  }
}

// ******************************************************************************

@Component({
  selector: 'custom-event-emitter-component',
  template: `
    <h3>6.1) CustomEventEmitterComponent</h3>
    <p>Custom events with event emitter and @Output() </p>
    <button (click)="emitEvent()">Click to emit message event</button>
  `
})
export class CustomEventEmitterComponent {
  @Output() updateMessage = new EventEmitter<Message>();
  
  emitEvent() : void {
    this.updateMessage.emit(new Message("New message from CustomEventsComponent"));
  }
}

// ******************************************************************************

@Component({
  selector: 'message-detail-component',
  template: `
    <h3>6.2) MessageDetailComponent</h3>
    <p>This component receives custom events with @Input()</p>
    <div style="margin-top:5px;">
      <p>{{message.time}}: {{message.message}}</p>
    </div>
  `
})
export class MessageDetailComponent { 
  @Input() message : Message;
  
  constructor () {
    this.message = new Message("created by constructor");
  }
}

// ******************************************************************************
// ******************************************************************************

@Component({
  selector: 'two-way-binding-component',
  template: `
    <h2>7) TwoWayBindingComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#two-way-binding" target="_blank">Angular 2 doc / Two-way binding</a>
    <p><code>&lt;sizer-component [(size)]="fontSizePx"&gt;</code>
    <div class="childcomponent">
      <sizer-component [(size)]="fontSizePx"></sizer-component>
    </div>
    
    <div style="padding-top:10px;">
      <button (click)="resetFontSizePx()">reset font size to 12px</button><br>
      <div style="margin-top:10px;">
        <div [style.font-size.px]="fontSizePx">This is the resizable text.</div>
      </div>
    </div>
  `
})
export class TwoWayBindingComponent {
  private fontSizePx : number = 12;
  
  resetFontSizePx () {
    this.fontSizePx = 12;
  }
}

// ******************************************************************************

@Component({
  selector: 'sizer-component',
  template: `
    <h3>7.1) SizerComponent</h3>
    <button (click)="dec()" title="smaller">-</button>
    <button (click)="inc()" title="bigger">+</button>
    <label [style.font-size.px]="size">FontSize: {{size}}px</label>
  `
})
export class SizerComponent {
  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}

// ******************************************************************************
// ******************************************************************************

@Component({
  selector: 'ng-model-binding-component',
  template: `
    <h2 id="NgModelBindingComponent">8) NgModelBindingComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#two-way-binding-with-ngmodel" target="_blank">Angular 2 doc / Two-way binding with NGModel</a>
    <div class="box">
      <span [innerHTML]="interpolationStatement"></span> = <span style="font-weight:bold;">{{result}}</span>
    </div>
    
    <div class="box">
      <input [value]="result" (input)="result=$event.target.value">without NgModel<br>
      <input [ngModel]="result" (ngModelChange)="result=$event">with <code>&lt;input [ngModel]="result" (ngModelChange)="result=$event"&gt;</code><br>
      <input [(ngModel)]="result">with <code>&lt;input [(ngModel)]="result"&gt;</code><br>
      <input bindon-ngModel="result">with <code>&lt;input bindon-ngModel="result"&gt;</code><br>
      <input [ngModel]="result" (ngModelChange)="setUpperCase($event)">
        with <code>&lt;input ... (ngModelChange)="setUpperCase($event)"&gt;</code><br>
    </div>
  `
})
export class NgModelBindingComponent {
  // escaping \{\{ does not work
  private interpolationStatement: string = "{{result}}";
  private result: string = "Hallo";
  
  setUpperCase (evt : string) {
    this.result = evt.toUpperCase();
  }
}

// ******************************************************************************
// ******************************************************************************

@Component({
  selector: 'built-in-directives-component',
  template: `
    <h2>9) BuiltInDirectivesComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#built-in-directives" target="_blank">Angular 2 doc / Built-in directives</a>

    <div id=directive-class class="childcomponent">
      <ng-class-component></ng-class-component>
    </div>
    <div><a href="#top">top</a></div>
    
    <div id=directive-style class="childcomponent">
      <ng-style-component></ng-style-component>
    </div>
    <div><a href="#top">top</a></div>
    
    <div id=directive-if class="childcomponent">
      <ng-if-component></ng-if-component>
    </div>
    <div><a href="#top">top</a></div>
    
    <div id=directive-switch class="childcomponent">
      <ng-switch-component></ng-switch-component>
    </div>
    <div><a class="to-top" href="#top">top</a></div>
    
    <div id=directive-for class="childcomponent">
      <ng-for-component></ng-for-component>
    </div>
    <div><a class="to-top" href="#top">top</a></div>
    
    <div id= directive-track-by class="childcomponent">
      <ng-for-trackby-component #trackby></ng-for-trackby-component>
    </div>
  `
})
export class BuiltInDirectivesComponent {
}

// ******************************************************************************

  @Component({
  selector: 'ng-class-component',
  template: `
    <h3>9.1) NgClassComponent</h3>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#ngclass" target="_blank">Angular 2 doc / NgClass</a>
    <div>
      <button (click)="toggleCanSave()">saveable</button>
      <button (click)="toggleUnchanged()">unchanged</button>
      <button (click)="toggleSpecial()">special</button>
    </div>
    
    <div style="padding-bottom:5px;">
      saveable={{canSave}}, unchanged={{isUnchanged}}, special={{isSpecial}}
    </div>
    
    <div [ngClass]="currentClasses">
      This div is initially saveable, unchanged, and special
    </div>
  `
})
export class NgClassComponent {
  private currentClasses: {};
  private canSave : boolean = false;
  private isUnchanged : boolean = false;
  private isSpecial : boolean = false;
    
  constructor () {
    this.setCurrentClasses();
  }
  
  toggleUnchanged () {
    this.isUnchanged = !this.isUnchanged;
    this.setCurrentClasses();
  }

  toggleSpecial () {
    this.isSpecial = !this.isSpecial;
    this.setCurrentClasses();
  }

  toggleCanSave () {
    this.canSave = !this.canSave;
    this.setCurrentClasses();
  }
  
  setCurrentClasses () {
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    }
  }
  
}

// ******************************************************************************

@Component({
  selector: 'ng-style-component',
  template: `
    <h3>9.2) NgStyleComponent</h3>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#ngstyle" target="_blank">Angular 2 doc / NgStyle</a>
    <div>
      <button (click)="toggleSaveable()">saveable</button>
      <button (click)="toggleUnchanged()">unchanged</button>
      <button (click)="toggleSpecial()">special</button>
    </div>
    
    <div style="padding-bottom:5px;">
      saveable={{canSave}}, unchanged={{isUnchanged}}, special={{isSpecial}}
    </div>
    
    <div [ngStyle]="currentStyles">
      This div is initially saveable, unchanged, and special
    </div>
  `
})
export class NgStyleComponent {
  private currentStyles: {};
  private canSave : boolean = false;
  private isUnchanged : boolean = false;
  private isSpecial : boolean = false;
    
  constructor () {
    this.setCurrentStyles();
  }
  
  toggleUnchanged () {
    this.isUnchanged = !this.isUnchanged;
    this.setCurrentStyles();
  }

  toggleSpecial () {
    this.isSpecial = !this.isSpecial;
    this.setCurrentStyles();
  }

  toggleSaveable () {
    this.canSave = !this.canSave;
    this.setCurrentStyles();
  }
  
  setCurrentStyles () {
    this.currentStyles = {
      // CSS styles: set per current state of component properties
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    }
  }
  
}

// ******************************************************************************

@Component({
  selector: 'ng-if-component',
  template: `
    <h3>9.3) NgIfComponent</h3>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#ngif" target="_blank">Angular 2 doc / NgIf</a>
    <div>
      <div><button (click)="toggleActive()">{{buttonText}}</button></div>

      <div style="border: 1px solid red; margin: 5px;">
        <div *ngIf="hero" >
          Here follows teh Element with <code>*ngIf="hero"</code>:<br>
          Hello, {{hero.name}}
        </div>
      </div>
      
      <div style="border: 1px solid green; margin: 5px;">
        Angular 2 component with <code>*ngIf="isActive"</code>:<br>
        <hero-detail-component *ngIf="isActive" [hero]="hero"></hero-detail-component>
      </div>
      
      <div style="border: 1px solid blue; margin: 5px;">
        <p [class.hidden]="isActive">
          This is the p-tag element with <code>[class.hidden]="isActive"</code><br>
          It remains in the DOM, but the other two elements are removed from DOM with
          the Deactivate button and added to the DOM with the Activate button.
        </p>
      <div>
    
    </div>
  `
})
export class NgIfComponent {
  private hero : Hero;
  private isActive : boolean;
  private buttonText : string;
  
  constructor () {
    this.isActive = true;
    this.toggleActive();
  }
  
  toggleActive () {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.hero = new Hero(1, "Kronos", "");
      this.buttonText = "Deactivate";
    }
    else
    {
      this.hero = null;
      this.buttonText = "Activate";
    }
  }
}

// ******************************************************************************

@Component({
  selector: 'ng-switch-component',
  template: `
    <h3>9.4) NgSwitchComponent</h3>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#ngswitch" target="_blank">Angular 2 doc / NgSwitch</a>
    <div>
      <fieldset #colorPicker (click)="colorChooser(colorPicker)" >
        <input type="radio" name="color" value="red" checked>Red
        <input type="radio" name="color" value="green">Green
        <input type="radio" name="color" value="blue">Blue
        <input type="radio" name="color" value="yellow">Yellow
        <input type="radio" name="color" value="white">White
        <input type="radio" name="color" value="???">???
      </fieldset>
    </div>
    
    <div>
      <span [ngSwitch]="theChoice">
        <span *ngSwitchCase="'red'">Red is selected</span>
        <span *ngSwitchCase="'green'">Green is selected</span>
        <span *ngSwitchCase="'blue'">Blue is selected</span>
        <span *ngSwitchCase="'yellow'">Yellow is selected</span>
        <span *ngSwitchCase="'white'">White is selected</span>
        <span *ngSwitchDefault>Something other is selected</span>
      </span>
    </div>
  `
})
export class NgSwitchComponent {
  private theChoice : string = "red";
  
  constructor () {
  }
  
  colorChooser (picker: HTMLFieldSetElement) {
    let choices = picker.children;
    for (let i = 0; i < choices.length; i++) {
      let choice = <HTMLInputElement>choices[i];
      if (choice.checked) {
        return this.theChoice = choice.value;
      }
    }
  }
}

// ******************************************************************************

@Component({
  selector: 'ng-for-component',
  template: `
    <h3>9.5) NgForComponent</h3>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#ngfor" target="_blank">Angular 2 doc / NgFor</a>
    
    <div class="box">
      <code>&lt;div *ngFor="let hero of heroes"&gt;"</code>
      <div *ngFor="let hero of heroes">
        <span style="margin:5px;">{{hero.name}}</span>
      </div>
    </div>
    
    <div class="box">
      <code>&lt;hero-detail-component *ngFor="let hero of heroes" ... &gt;"</code>
      <hero-detail-component *ngFor="let hero of heroes" [hero]="hero"></hero-detail-component>
    </div>
    
    <div class="box">
      <code>&lt;div *ngFor="let hero of heroes; let i=index"&gt; ..."</code>
      <div *ngFor="let hero of heroes; let i=index">{{i + 1}} - {{hero.name}}</div>
    </div>
  `
})
export class NgForComponent {
  private heroes : Hero [];
  
  constructor () {
    this.heroes = [
      new Hero(1, "Kronos", ""),
      new Hero(2, "Okeanos", ""),
      new Hero(3, "Koios", ""),
      new Hero(4, "Kreios", ""),
      new Hero(5, "Iapetos", "")
    ];
  }
}

// ******************************************************************************

@Component({
  selector: 'ng-for-trackby-component',
  template: `
    <h3>9.6) NgForTrackByComponent</h3>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#ngfortrackby" target="_blank">Angular 2 doc / NgForTrackBy</a><br>
    <div>
      <button (click)="refreshHeroes()">Refresh all heroes</button>
      <button (click)="clearCounter()">Clear DOM change counter</button>
      <div>First hero: <input [(ngModel)]="heroes[0].name"></div>
      
      <div class="redbox">
        <p>Without trackBy: <strong>{{heroesNoTrackByChangeCount}} DOM changes</strong></p>
        <div #noTrackBy class="box">
          <div *ngFor="let hero of heroes">({{hero.id}}) {{hero.name}}</div>
        </div>
      </div>

      <div class="greenbox">
        <p>With trackBy: <strong>{{heroesWithTrackByChangeCount}} DOM changes</strong></p>
        <div #withTrackBy class="box">
          <div *ngFor="let hero of heroes; let i = index;trackBy:trackByHeroId">({{hero.id}}) {{hero.name}}</div>
        </div>
      </div>
    </div>
  `
})
export class NgForTrackByComponent implements AfterContentInit {
  private heroes : Hero [];
  @ViewChild('noTrackBy') childNoTrackBy: ElementRef;
  @ViewChild('withTrackBy') childWithTrackBy: ElementRef;
  private heroesNoTrackByChangeCount = 0;
  private heroesWithTrackByChangeCount = 0;
    
  constructor (private _elRef:ElementRef, private _renderer:Renderer) {
    this.refreshHeroes();
  }
  
  refreshHeroes () {
    this.heroes = [
      new Hero(1, "Kronos", ""),
      new Hero(2, "Okeanos", ""),
      new Hero(3, "Koios", ""),
      new Hero(4, "Kreios", ""),
      new Hero(5, "Iapetos", "")
    ];
  }

  clearCounter () {
    this.heroesNoTrackByChangeCount = 0;
    this.heroesWithTrackByChangeCount = 0;
  }
  
  ngAfterContentInit() {
    //let noTrackBy = this._elRef.nativeElement.querySelector('div#noTrackBy');
    let noTrackBy = this.childNoTrackBy.nativeElement;
      if (noTrackBy) {
      let thiz = this;
      this._renderer.listen(noTrackBy, 'DOMNodeInserted', function(event) {
        thiz.heroesNoTrackByChangeCount++
      });
      this._renderer.listen(noTrackBy, 'DOMNodeRemoved', function(event) {
        thiz.heroesNoTrackByChangeCount++
      });
      this._renderer.listen(noTrackBy, 'DOMSubtreeModified', function(event) {
        thiz.heroesNoTrackByChangeCount++
      });
    }
    
    //let withTrackBy = this._elRef.nativeElement.querySelector('div#withTrackBy');
    let withTrackBy = this.childWithTrackBy.nativeElement;
    if (withTrackBy) {
      let thiz = this;
      this._renderer.listen(withTrackBy, 'DOMNodeInserted', function(event) {
        thiz.heroesWithTrackByChangeCount++;
      });
      this._renderer.listen(withTrackBy, 'DOMNodeRemoved', function(event) {
        thiz.heroesNoTrackByChangeCount++
      });
      this._renderer.listen(withTrackBy, 'DOMSubtreeModified', function(event) {
        thiz.heroesWithTrackByChangeCount++;
      });
    }
  }

  trackByHeroId (index: number, hero: Hero) : number {
    return hero.id; 
  }

  trackById (index: number, item: any): string {
    return item['id'];
  }
  
}

// ******************************************************************************

@Component({
  selector: 'template-reference-variables-component',
  template: `
    <h2>10) TemplateReferenceVariablesComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#template-reference-variables" target="_blank">Angular 2 doc / Template reference variables</a>
    <div class="box">
      <input #phone placeholder="phone number">
      <button (click)="callPhone(phone.value)">Call</button>
      <!-- fax refers to the input element; pass its value to an event handler -->
      <input ref-fax placeholder="fax number">
      <button (click)="callFax(fax.value)">Fax</button>
    </div>
    
    <div class="box">
      <h4>Example Form</h4>
      <form (ngSubmit)="onSubmit(theForm)" #theForm="ngForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input class="form-control" name="name" required [(ngModel)]="hero.name">
        </div>
        <button type="submit" [disabled]="!theForm.form.valid">Submit</button>
      </form>
    </div>
    
    <div class="box">
      <button (click)="toggleDisabled()">Enable/Disable</button>
      <button #btn [disabled]="isDisabled" [innerHTML]="'disabled by attribute: '+btn.disabled"></button>
    </div>
  `
})
export class TemplateReferenceVariablesComponent {
  private hero : Hero;
  private isDisabled : boolean = true;
  
  constructor () {
    this.hero = new Hero(1, "Batman", "");
  }
  
  callFax(value: string) {
    window.alert(`Faxing ${value} ...`); 
  }
  
  callPhone(value: string) {
    window.alert(`Calling ${value} ...`); 
  }
  
  onSubmit(form: NgForm) {
    let evtMsg = form.valid ?
      ' Form value is ' + JSON.stringify(form.value) :
      ' Form is invalid';
    window.alert('Form submitted.' + evtMsg);
  }
  
  toggleDisabled () {
    this.isDisabled = !this.isDisabled;
  }
}

// ******************************************************************************
// ******************************************************************************

@Component({
  selector: 'input-and-output-properties-component',
  template: `
    <h2>11) InputAndOutputPropertiesComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#input-and-output-properties" target="_blank">Angular 2 doc / Input and output properties</a>
    <div class="box">
      <img [src]="iconUrl"/>
      <button (click)="onSave()">Save</button>
    </div>
    
    <div class="box">
      <hero-with-delete-component [hero]="currentHero" (deleteRequest)="deleteHero($event)"></hero-with-delete-component>
    </div>
  `
})
export class InputAndOutputPropertiesComponent {
  private iconUrl : string = "img/titan.png";
  private currentHero : Hero;
  
  constructor () {
    this.currentHero = new Hero(1, "Batman", "");
  }
  
  onSave(event: KeyboardEvent) {
    let evtMsg = event ? ' Event target is ' + (<HTMLElement>event.target).innerText : '';
    window.alert('Saved.' + evtMsg);
  }
  
  deleteHero (hero: Hero) {
    window.alert('Deleted hero: ' + (hero && hero.name));
  }
}

// ******************************************************************************

@Component({
  selector: 'hero-with-delete-component',
  template: `
    <div style="margin-top:5px;">
      <p>Hero: id={{hero.id}} name={{hero.name}}
      <button (click)="delete()">Delete</button>
    </div>
  `
})
export class HeroWithDeleteComponent { 
  @Input() hero : Hero;
  @Output() deleteRequest = new EventEmitter<Hero>();
  
  delete() {
    this.deleteRequest.emit(this.hero);
  }
}

// ******************************************************************************
// ******************************************************************************

@Component({
  selector: 'alias-input-output-component',
  template: `
    <h2>12) InputAndOutputPropertiesComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#aliasing-io" target="_blank">Angular 2 doc / Aliasing input/output properties</a>
    <div class="box">  
      <div (myClick)="clickMessage=$event">Click me</div>
      {{clickMessage}}
    <div>
  `
})
export class AliasingInputOutputComponent {
  private clickMessage = '';
}
  
// Directives are normally placed in a *.directive.file

@Directive({
  selector: '[myClick]',
  outputs: ['clicks:myClick']  // propertyName:alias
})
export class ClickDirective {
  clicks = new EventEmitter<string>();
  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement.addEventListener('click', (event: Event) => {
      this.toggle = !this.toggle;
      this.clicks.emit(this.toggle ? 'Clicked!' : '');
    });
  }
}

// ******************************************************************************
// ******************************************************************************

@Component({
  selector: 'template-expression-operators-component',
  template: `
    <h2>13) TemplateExpressionOperatorsComponent</h2>
    <p>Tutorial: <a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#template-expression-operators" target="_blank">Angular 2 doc / Template expression operators</a>
    <div class="box">  
      <h4>The pipe operator |</h4>
      <code>title | uppercase</code>
      <div><code>title='{{title}}'</code> through uppercase pipe: {{title | uppercase}}</div>
    </div>
    
    <div class="box">  
      <h4>Pipe chaining |</h4>
      <code>title | uppercase | lowercase</code>
      <div><code>title='{{title}}'</code> through a pipe chain: {{title | uppercase | lowercase}}</div>
    </div>
    
    <div class="box">  
      <h4>Apply parameters to a pipe</h4>
      <code><span [innerHTML]="codeStatement1"></span></code><br>
      <code>person?.birthdate | date:'longDate'</code>
      <div>Birthdate: {{person?.birthdate | date:'longDate'}}</div>
    </div>
    
    <div class="box">  
      <h4>The json pipe</h4>
      <code>&lt;div&gt;<span [innerHTML]="codeStatement2"></span>&lt;/div&gt;</code>
      <div>{{person | json}}</div>
    </div>
    
    <div class="box">  
      <h4>The safe navigation operator ?. (Elvis operator) </h4>
      <p>Show name of person1 (not null): {{person.name}}<br>
      <p>Show name of person2 (is null): {{person2?.name}}<br>
      <p>Show name of person3 (not defined): {{person3?.name}}<br>
    </div>
  `
})
export class TemplateExpressionOperatorsComponent {
  private codeStatement1 = "private person = { name : 'Max', birthdate : '2001-11-20' };";
  private codeStatement2 = "{{person | json}}";
  
  private title : string = "This is a title";
  private person = { name : 'Max', birthdate : '2001-11-20' };
  private person1 = { name : 'Andy' };
  private person2 = null;
}
  


