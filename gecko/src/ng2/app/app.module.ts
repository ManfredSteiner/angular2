import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {
   InterpolationComponent,
   NewMentalModelComponent,
   PropertyBindingComponent, HeroDetailComponent,
   AttributeClassStyleBindingComponent,
   EventBindingComponent,
   CustomEventsComponent, CustomEventEmitterComponent, MessageDetailComponent,
   TwoWayBindingComponent, SizerComponent,
   NgModelBindingComponent,
   BuiltInDirectivesComponent,
   NgClassComponent, NgStyleComponent, NgIfComponent, NgSwitchComponent,
   NgForComponent, NgForTrackByComponent, TemplateReferenceVariablesComponent,
   InputAndOutputPropertiesComponent, HeroWithDeleteComponent, 
   AliasingInputOutputComponent, ClickDirective, TemplateExpressionOperatorsComponent
} from './template-syntax.components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    InterpolationComponent,
    NewMentalModelComponent,
    PropertyBindingComponent,  HeroDetailComponent,
    AttributeClassStyleBindingComponent,
    EventBindingComponent,
    CustomEventsComponent, CustomEventEmitterComponent, MessageDetailComponent,
    TwoWayBindingComponent, SizerComponent,
    NgModelBindingComponent,
    BuiltInDirectivesComponent,
    NgClassComponent, NgStyleComponent, NgIfComponent, NgSwitchComponent, 
    NgForComponent, NgForTrackByComponent, TemplateReferenceVariablesComponent,
    InputAndOutputPropertiesComponent, HeroWithDeleteComponent,
    AliasingInputOutputComponent, ClickDirective, TemplateExpressionOperatorsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }