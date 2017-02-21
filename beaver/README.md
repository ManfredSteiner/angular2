# Project Beaver

|  |  |
| --- | ---------- |
| ![Project Logo](images/beaver.png) | This is a [beaver (Biber)](https://a-z-animals.com/animals/beaver/)

## Node.js Express-WebServer with Angular2 application in pure Javascript

This example shows:

* how to create and run a Web-Server based on **Node.js Express**
* how to use an pure Javascript **Angular 2** application supported by this Web-Server
* how to use **Netbeans 8.2** for working with this HTML5 project

Follow the links to find some more information for
[Netbeans IDE](http://netbeans.org/), 
[Node.js](https://nodejs.org/en/), 
[Express](https://www.npmjs.com/package/express), and 
[Angular 2](https://angular.io/docs/).

See also the original [Angular2 tutorial link](https://angular.io/docs/js/latest/quickstart.html).

## System Preparation

Netbeans IDE (8.2) and the following plugins should be installed:

* HTML5 Kit
* Markdown Support [http://plugins.netbeans.org/plugin/50964/markdown-support](http://plugins.netbeans.org/plugin/50964/markdown-support)

Make sure that an actual **Node.js** version is installed on your host.  
See: [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)

-------------------------------------------------------------

## Project description

```
project ---- public ---- app ---- app.component.js
         |           |            app.module.js
         |           |            main.js
         |            -- index.html
         |               styles.css
         |
          -- package.json
             server.jss
```

The following files are used:

* [package.json](package.json) Node.js configuration (see [Description](https://docs.npmjs.com/files/package.json))
* [server.js](server.js): The Web-Server Node.js application, based on Node.js *Express*.
* [index.html](public/index.html): Main web page loaded by web-client
* [styles.css](public/styles.css): Stylesheet used by *index.html*

... and for Angular 2:

* [app.component.js](public/app/app.component.js): Angular 2 component *AppComponent*  
  Angular applications are made up of components. A component is the combination of an HTML template
  and a component class that controls a portion of the screen.
  This component is used to replace the content of the *my-app* selector element in [index.html](index.html)  
  See also [https://angular.io/docs/js/latest/quickstart.html#!#our-first-angular-component](https://angular.io/docs/js/latest/quickstart.html#!#our-first-angular-component)
* [app.module.js](public/app/app.module.js): Angular 2 module  
  Angular Modules help organize an application into cohesive blocks of functionality.  
  See also [https://angular.io/docs/js/latest/quickstart.html#!#modules](https://angular.io/docs/js/latest/quickstart.html#!#modules)
* [main.js](public/app/main.js): Start of Angular 2 application  
  This file is used to bootstrap the Angular 2 application.  
  See also [https://angular.io/docs/js/latest/quickstart.html#!#bootstrap-it-](https://angular.io/docs/js/latest/quickstart.html#!#bootstrap-it-)


### Dependencies

See [package.json](package.json) and [https://www.npmjs.com/~angular](https://www.npmjs.com/~angular)

The module prefix **`@angular`** is used for all stable Angular 2 framework modules.

* **`@angular/core`**: Angular core framework 
* **`@angular/common`**: Angular commonly needed directives and services 
* **`@angular/compiler`**: Angular compiler library
* **`@angular/platform-browser`**: Angular library for using Angular in a web browser 
* **`@angular/platform-browser-dynamic`**: Angular library for using Angular in a web browser with JIT compilation
* **`rxjs`**: Reactive Extensions Library for JavaScript (needed be Angular 2 framework)  
   see: [https://www.npmjs.com/package/rxjs](https://www.npmjs.com/package/rxjs)
* **`zone.js`**: library for dynamic extent of asynchronous calls (needed by Angular 2 framework)  
   see: [https://www.npmjs.com/package/zone.js](https://www.npmjs.com/package/zone.js)
* **`reflect-metadata`**: library to add Decorators  
   see: [https://www.npmjs.com/package/reflect-metadata](https://www.npmjs.com/package/reflect-metadata)

Other dependencies:

* **`express`**: Web-Server
   see: [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)
* **`morgan`**: HTTP request Logger middleware
   see: [https://www.npmjs.com/package/morgan](https://www.npmjs.com/package/morgan)


-------------------------------------------------------------

## Variant A: Build and run project from GIT-Repository

To do (on Linux OS) ...

1. open shell and clone this git repository  
  `git clone <repository-url>`
2. change working directory to project and install node modules  
  `cd <project-dir>/beaver`  
  `npm install`
4. start the server  
  `npm start`
5. start a web-client and test the server  
  [http://localhost:8080](http://localhost:8080)

--------------------------------------------------------------

## Variant B: Create project from scratch

In the following subsections you can see how to create and build a 
Express/Angular 2 project with Netbeans from scratch.

### Create new Netbeans Project from scratch

* New Project: 
    * Categories: **HTML5/JavaScript**
    * Projects: **HTML5/JS Application with Node.js**
* Next -> Select project name and project location
* Next -> Unselect **Enable Express**
* Next -> Create package.json
* Finish

Rename the file *main.js* to *server.js* (or delete ist).

### Modify package.json

Set proper author and repository and add the following entries to prevent warnings 
and to enable some npm scripts.

```
{
   "scripts": {
      "start": "node server.js"
    },
   "description": "Node.js Express WebServer with Angular2/Javascript",
   "license": "ISC",
   "private": true
}
```

### Install npm modules

Execute in shell on project directory location ...

```
npm install zone.js --save
npm install rxjs --save
npm install reflect-metadata --save
npm install express --save
npm install morgan --save
npm install @angular/core --save
npm install @angular/common --save
npm install @angular/compiler --save
npm install @angular/platform-browser --save
npm install @angular/platform-browser-dynamic --save
```

### Create project files

Create the Node.js server application ([server.js](server.js)) and the Angular 2 project files
using the project file structure shown above.

### Run the server and load the main page

Open Netbeans Project **Properties** (right mouse click on project) and select Catagory **Run**:

Set in this dialog ...

* Run As: **Node.js Application**
* Start File: **server.js**
* Run Browser: selected
    * Start file: **index.html**
    * Project URL: **http://localhost:8080**

Now you can run the Netbeans Project and you should see a running Angular 2 application in 
[http://localhost:8080](http://localhost:8080).

### Version Control via GIT

Create the file [.gitignore ](.gitignore) and make sure, that the
npm modules in folder *node_modules* and the files in *nbproject/private* are not under version control.
