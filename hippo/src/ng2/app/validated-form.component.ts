// https://juristr.com/blog/2016/11/ng2-template-driven-form-validators/

import { Component } from '@angular/core';
import { Hero }      from '../shared/hero';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'validated-form-component',
  template: `
    <h2>Validated Form Component</h2>
    <div class="form-group">Using an Angular 2 Directive as Validator for the input field <em>Name</em>.</div>    
    <form novalidate #form="ngForm" (ngSubmit)="form.valid && onSubmit(form.value)">
      <div class="form-group">
        <label for="name">Name</label>
        <input #nameDomObject type="text" ngModel name="ModelName" class="form-control" #name_ngModel="ngModel" required nameValidator [(ngModel)]="model.name" (keyup)="onKey($event, name_ngModel, form, nameDomObject)">
      </div>
      <div style="color:red" *ngIf="name_ngModel.errors && (name_ngModel.dirty || name_ngModel.touched || form.submitted)">
        <p *ngIf="name_ngModel.errors.required">
            The name is required
        </p>
      </div>
      <div style="color:blue" *ngIf="name_ngModel.errors && !name_ngModel.errors.required">
        <p>
            Validator active... ERROR (the name must start with 'Super')
        </p>
      </div>
      <div style="color:green" *ngIf="!name_ngModel.errors">
        <p>
            Validator active... OK (name starts with 'Super')
        </p>
      </div>
      <div class="form-group">
        <button [disabled]="!form.valid">Submit</button>
        <button (click)="onReset($event, form, nameModel, nameDomObject)">reset</button>
      </div>
      
    </form>   
    <div>
      <p>ValidatedFormComponent attributes:</p>
      <ul>
        <li>model.id = {{model.id}}</li>
        <li>model.name = {{model.name}}</li>
        <li>model.power = {{model.power}}</li>
        <li>model.alterEgo = {{model.alterEgo}}</li>          
      </ul>
      <h6>name input DOM Object: {{nameInputClassname}}</h6>
      <h6>name ngModel : {{nameModelClassname}}</h6>
      <ul>
        <li>name ngModel.errors = {{nameModelErrors}}</li>
        <li>name ngModel.valid (value valid) = {{nameModelValid}}</li>
        <li>name ngModel.pristine (value not changed) = {{nameModelPristine}}</li>
        <li>name ngModel.dirty (value changed) = {{nameModelDirty}}</li>
        <li>name ngModel.untouched (control not visited in the past) = {{nameModelUntouched}}</li>
        <li>name ngModel.touched (control visited in the past) = {{nameModelTouched}}</li>
      </ul>
      <h6>form : {{formClassname}}</h6>
      <ul>
        <li>form.valid = {{formValid}}</li>
        <li>form.submitted = {{formSubmitted}}</li>
      </ul>
    </div>      
  `
})
export class ValidatedFormComponent { 

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[2], 'Chuck Overstreet');
  
  nameInputClassname = "?";
  
  nameModelClassname = "?";
  nameModelErrors = "?";
  nameModelValid = "?";
  nameModelPristine = "?";
  nameModelDirty = "?";
  nameModelUntouched = "?";
  nameModelTouched = "?";
  
  formClassname = '?';
  formValid = '?';
  formSubmitted = "?";
  
  setValues (domObject:any, ngModel:any, ngForm:any) {
    if (domObject && typeof(domObject) === 'object') {
      this.nameInputClassname = domObject.constructor.name;
    }
    if (ngModel && typeof(ngModel) === 'object')
    {
      this.nameModelClassname = ngModel.constructor.name;
      this.nameModelErrors = JSON.stringify(ngModel.errors);
      this.nameModelValid = JSON.stringify(ngModel.valid);
      this.nameModelPristine = JSON.stringify(ngModel.pristine);
      this.nameModelDirty =  JSON.stringify(ngModel.dirty);
      this.nameModelUntouched = JSON.stringify(ngModel.untouched);
      this.nameModelTouched = JSON.stringify(ngModel.touched);
    }
    if (ngForm && typeof(ngForm) === 'object') {
      this.formClassname = ngForm.constructor.name;
      this.formSubmitted = JSON.stringify(ngForm.submitted);
      this.formValid = JSON.stringify(ngForm.valid);
    }
  }
  
  
  
  onReset(event:any, ngForm:any, ngModel:any) {
    this.model.name = "";
    this.setValues(null, ngModel, ngForm);
  }

  onSubmit(value) {
    console.log("Submitted: " + JSON.stringify(value));
  }
  
  onKey (event:any, ngModel:any, ngForm:any, domObject:any ) {
    this.setValues(domObject, ngModel, ngForm);

//    if (domObject && typeof(domObject) === 'object') {
//      let info = domObject.constructor.name + '{';
//      for(let propertyName in domObject) {
//        info += propertyName + ',';
//      }
//      info += '}';
//      console.log(info);
//    }
  }
  
  
}