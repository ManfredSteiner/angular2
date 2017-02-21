# Angular 2 - Earwig Tutorial



Subchapter | Original source  
-----------|-----------------  
**[Naming-conventions](#naming-conventions)** | How to name classes, files, folders, ...
**[New folders and separate files for each class](#new-folders-and-spearate-files-for-each-class)** | What's to do if you use a single file for each class...
**[Components](#components)** | How to create Angular 2 components ...
**[Structutal Directives](#structural-directives)** | How to use the Angular 2 directives **\*ngFor** and **\*ngIf**
**[Private investigations](#private-investigations-)** | Why Angular 2 ignores `private` attributes

Which sites and tutorials should be handled before:

* [Learning Angular 2](https://angular.io/docs/ts/latest/guide/learning-angular.html)
* [Angular 2 architecture](https://angular.io/docs/ts/latest/guide/architecture.html)
* [The Angular 2 root module](https://angular.io/docs/ts/latest/guide/appmodule.html)

Which sites and tutorials should be accomplished together with this tutorial:

* [Angular 2 components (learnangular2.com) ] (http://learnangular2.com/components/)
* [Angular 2 components (angular.io/docs) ](https://angular.io/docs/ts/latest/guide/architecture.html#!#components)

The examples in this tutorial are following 

* [Displaying Data with Angular 2](https://angular.io/docs/ts/latest/guide/displaying-data.html)

--------------------------------------------------------------------

## Naming conventions

In Javascript / Typescript there is no mandatory naming concept for classes,
packages, modules, ...

The following rules are commonly accepted:

* **File names:**  
  Use only lower case characters, combinded with `.` and/or `-`  
  Example: `hero-app.component.ts`
* **Class names:**  
  Use [PascalCase](https://en.wikipedia.org/wiki/PascalCase) notation  
  Example: `HeroAppComponent`
* **Angular 2 architecture elements:**  
  Add a point and the element name for the filename.  
  Example *Component*: `app.component.ts`  
  Example *Service*: `app.service.ts`
* **Angular 2 multiple elements per file:**  
  If there is more than one element in the file ...
  Example *Component*: `app.components.ts`  
  Example *Service*: `app.services.ts`
* **PascalCase words:**  
  Use a `-` to separate the words in the filename.  
  Example for `class PersonListManganger`: `person-list-manager.component.ts`
* **Function and member names**  
  Use [CamelCase](https://en.wikipedia.org/wiki/Camel_case) notation  
  Example: `getFirstname()`

If every class is written in a separate file, a lot of resources must 
be loaded by the browser. Therefore such classes are often combined to a single file.  
In small projects, it is also a commonly used practice to locate small classes together in
a single file. 

A typical **folder structure** for Angular 2 project may be:  

```
  controllers/
  directives/
  services/
  shared/
  templates/
  util/
```

Need more information... [http://stackoverflow.com/questions/35346342](http://stackoverflow.com/questions/35346342)





--------------------------------------------------------------------

## New folders and spearate files for each class

In most Angular 2 Tutorials multiple classes are located inside the 
single file `app.component.ts`.

In this project we want a separate file for each class. 
We want also try out how to use multiple folders in the `src/angular2` directory,
in order to support a good folder structure in our project.

We create the folder [src/ng2/shared](src/ng2/shared) and the class file 
[hero.ts](src/ng2/shared/hero.ts) inside this folder.

Each new folder needs some configuration lines in the file [systemjs.config.js](public/systemjs.config.js).  
For example for the new folder `shared`

```
  ...
  map: {
    ...
    shared: 'ng2/shared',
    ...
  },
  packages: {
    ...
    shared: {
      defaultExtension: 'js'
    },
    ...
  },
  ... 
```

--------------------------------------------------------------------

## Components

In Angular 2, a component is used to control a patch of screen called a view.

You define a component's application logic inside a class. 
The class interacts with the view with properties and methods.

Here’s a simple [@Component](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html) 
that renders the title and hero name:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'angular2-app',
  template: `
    <h1>{{title}}</h1>
    <p>My favorite hero is: {{ name }}</p>
  `
})

export class AppComponent {
  private title: string;
  private name : string; 
  
  constructor() {
    this.title = 'Angular2-Earwig / Tour of Heroes';
    this.name = 'Windstorm';
  }
  
}
```
When we use the `<angular2-app></mangular2-app>` tag in our HTML, 
this component will be created, our constructor called, and rendered.

The HTML5 syntax checker of Netbeans may indicate an error for the unknown tag `angular2-app`.
You have to add the new tag in the file [nbproject/customs.json](nbproject/customs.json).

The HTML template can be written as inline (see example above), or as template file.

```typescript
@Component({
  selector: 'angular2-app',
  template: '../public/component-template.html'
})
```

--------------------------------------------------------------------

## Structural Directives

Angular templates are dynamic. When Angular renders them, it transforms the DOM
according to the instructions given by
[directives](https://angular.io/docs/ts/latest/guide/architecture.html#!#directives).

Structural directives alter layout by adding, removing, and replacing elements in DOM.

### Example 1: Structural directive `ngFor`

```typescript
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
```

Angular duplicates the `<li>` for each item in the array `heroes`, setting the `hero` variable to each item.
in the iteration. Angular uses that variable in the double curly braces. 
**ngFor** can repeat items for any iterable object. 


### Example 2: Structural directive `ngIf`
  
```typescript
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    </ul>
```

The Angular **ngIf** directive inserts or removes an element based on a truthy/falsey condition.  
It isn't showing and hiding the message. It is adding and removing the paragraph element from the DOM. 
That improves performance, especially in larger projects when conditionally including or excluding big
chunks of HTML with many data bindings.

Don't forget the leading asterisk (\*) in **\*ngFor** and **\*ngIf**. 
It is an essential part of the syntax.  
See [template-syntax](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#star-template) 
for more information.

--------------------------------------------------------------------

## The source files

The file [src/ng2/shared/hero.ts](src/angular2/ng2/hero.ts) is used to declare the `class Hero`.
This class is used to hold all datas of a hero.

```typescript
export class Hero { 
  private id: number;
  private name: string;
  
  constructor(id:number, name:string) {
    this.id = id;
    this.name = name;
  }
}
```

The file [src/ng2/app/app.component.ts](src/ng2/app/app.component.ts)
is used to declare the `class AppComponent`.
This class is used as main component in our Angular 2 project.

```typescript
import { Component } from '@angular/core';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-component',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{ myHero.name }}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `
})

export class AppComponent {
  private title: string;
  private heroes : Hero [];
  private myHero : Hero; 
  
  constructor() {
    this.title = 'Angular2-Earwig / Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(2, 'Bombasto'),
      new Hero(3, 'Magneta'),
      new Hero(4, 'Tornado')
    ];
    this.myHero = this.heroes[0];
  }
  
}
```

--------------------------------------------------------------------

## Private investigations ...

The `class Hero` declares the private members *id* and *name*. 
But the Angular 2 system can access these members from outside the class. 
What does that mean?

```typescript
  <h2>My favorite hero is: {{ myHero.name }}</h2>
```

Attributes like `private` are used by the Typescript transpiler, when transpiling
a `*.ts` file into a `*.js` Javascript file. Inside Typescript, no access to the 
private members is possible form outside the object. But Angular 2 is working with 
the Javascript files. They does not support private attributes, and therefore access
to these private members is possible from outside the object.
