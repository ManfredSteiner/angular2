# Project Hippo  

|  |  |
| --- | ---------- |
| ![Project Logo](images/hippo.png) | This is a [Hippopotamus (Nilpferd)](https://a-z-animals.com/animals/hippo/) |
 
## Angular 2 forms

This project shows ...

* how to use Angluar 2 forms
* how to use HTML snippets with absolut path in Angular 2 and Netbeans IDE
* how to configure Gulp.js to copy some files and folders into a public folder
* how the styling sheets of bootstrap framework is used

A form creates a cohesive, effective, and compelling data entry experience.
An Angular form coordinates a set of data-bound user controls, tracks changes, validates input, and presents errors.

Open [Angular 2 tutorial Forms](https://angular.io/docs/ts/latest/guide/forms.html)
to work through step by step.  
Start with **hero-form-1.component.html** in [hero-form.component](src/ng2/app/hero-form.component.ts)
and go ahead up to **hero-form-8.component**.

You will learn:

* **hero-form-1.component.html**  
  Create an Angular HTML form template and a form component class with a `@Component` decorator.  
  [https://angular.io/docs/ts/latest/guide/forms.html#create-an-initial-html-form-template](https://angular.io/docs/ts/latest/guide/forms.html#create-an-initial-html-form-template)

* **hero-form-2.component.html**  
  Usage of the `[(ngModel)]` syntax for two-way data binding.  
  [https://angular.io/docs/ts/latest/guide/forms.html#add-powers-with-_-ngfor_](https://angular.io/docs/ts/latest/guide/forms.html#add-powers-with-_-ngfor_)

* **hero-form-3.component.html**, * **hero-form-4.component.html**    
  Initialize the values in the form with the model attribute values.  
  [https://angular.io/docs/ts/latest/guide/forms.html#two-way-data-binding-with-_ngmodel_](https://angular.io/docs/ts/latest/guide/forms.html#two-way-data-binding-with-_ngmodel_)

* **hero-form-5.component.html**  
  Track state (valid, invalid, ...) of form controls with ngModel and add custom CSS styles for visual feedback.
  Use the template variable `#spy` to show the classes of a DOM object (useful for debugging).  
  [https://angular.io/docs/ts/latest/guide/forms.html#!#track-control-state-and-validity-with-_ngmodel_](https://angular.io/docs/ts/latest/guide/forms.html#!#track-control-state-and-validity-with-_ngmodel_)

* **hero-form-6.component.html**, **hero-form-7.component.html**  
  Show and hide validation error messages; handle button event (NewHero); use template reference variables (`#name`).  
  [https://angular.io/docs/ts/latest/guide/forms.html#show-and-hide-validation-error-messages](https://angular.io/docs/ts/latest/guide/forms.html#show-and-hide-validation-error-messages)

* **hero-form-8.component.html**  
  Toggle two form regions on Submit button event by binding to the `NgForm.ngSubmit` event property.   
  [https://angular.io/docs/ts/latest/guide/forms.html#toggle-two-form-regions-extra-credit-](https://angular.io/docs/ts/latest/guide/forms.html#toggle-two-form-regions-extra-credit-)

--------------------------------------------------------------

This tutorial uses Netbeans, Gulp.js, Node.js, Express Web-Server.  
Follow these links to find some more information for
[Netbeans IDE](http://netbeans.org/), 
[Gulp.js](https://www.npmjs.com/package/gulp),
[Node.js](https://nodejs.org/en/), 
[Express Web-Server](https://www.npmjs.com/package/express), 
[Angular 2](https://angular.io/docs/) and 
[TypeScript](https://www.typescriptlang.org/).

--------------------------------------------------------------

## How to run the project 

To do (on Linux OS) ...

1. open shell and clone git repository  
  `git clone <repository-url>`
2. change working directory to project and install node modules  
  `cd <project-dir>/hippo`  
  `npm install`
3. build the project and start the server  
  `npm start`
4. start a web-client and test the server  
  [http://localhost:8080](http://localhost:8080)

-------------------------------------------------------------
