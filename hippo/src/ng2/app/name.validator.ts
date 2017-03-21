import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';


// validation function
function validateNameFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    
    if (c && typeof(c) === 'object') {
      let info = 'ValidatorFn(c) with c:' + c.constructor.name;
      info += '={..., ';
//      for(let propertyName in c) {
//        info += propertyName + ',';
//      }
      if (c.value && typeof(c.value) === 'string')
        info += "value:string='" + c.value;
      info += "'}";
      console.log(info);
    }
    if (c && c.value && typeof(c.value) === 'string') {
      let isValid = c.value.startsWith('Super');
      if(isValid) 
        return null;
    }
    return { name: { valid: false } };
  }
}


@Directive({
  selector: '[nameValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NameValidator, multi: true }
  ]
})
export class NameValidator implements Validator {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = validateNameFactory();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }
  
}