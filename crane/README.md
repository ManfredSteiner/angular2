# Express Web-Server with Angular2 and TypeScript

This example shows:

* how to create and run a Web-Server based on **Node.js Express**
* how to use **TypeScript** as source file language 
* how to use an **Angular 2** application supported by this Web-Server
* how to use **Netbeans** for working with this HTML5 project

Follow the links to find some more information for
[Netbeans IDE](http://netbeans.org/), 
[Node.js](https://nodejs.org/en/), 
[Express Web-Server](https://www.npmjs.com/package/express), 
[Angular 2](https://angular.io/docs/) and 
[TypeScript](https://www.typescriptlang.org/).

## System Preparation

Netbeans IDE and the following plugins should be installed:

* HTML5 Kit
* TypeScript Editor [http://plugins.netbeans.org/plugin/60605/typescript-editor](http://plugins.netbeans.org/plugin/60605/typescript-editor)
* Markdown Support [http://plugins.netbeans.org/plugin/50964/markdown-support](http://plugins.netbeans.org/plugin/50964/markdown-support)

Make sure that an actual **Node.js** version is installed on your host.  
See: [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)

-------------------------------------------------------------

## Project description

```
project ---- public ---- app ---- app.components.ts
         |           |            app.module.ts
         |           |            main.ts
         |            -- index.html
         |               styles.css
         |               systemjs.config.js
         |
          -- tsconfig.json
             package.json
             server.ts
```

The following files are used:

* [package.json](package.json) Node.js configuration (see [Description](https://docs.npmjs.com/files/package.json))
* [tsconfig.json](tsconfig.json): Configuration for TypeScript transpiler *tsc*
* [index.html](index.html): Main web page loaded by web-client
* [styles.css](styles.css): Stylesheet used by *index.html*
* [server.js](server.js): The Web-Server Node.js application, based on Node.js *Lite-Server*.


... and for Angular 2:

* [app.component.ts](public/app/app.component.ts): Angular 2 component *AppComponent*  
  Angular applications are made up of components. A component is the combination of an HTML template
  and a component class that controls a portion of the screen.
  This component is used to replace the content of the *my-app* selector element in [index.html](public/index.html)  
  See also [https://angular.io/docs/ts/latest/quickstart.html](https://angular.io/docs/ts/latest/quickstart.html)
* [app.module.ts](public/app/app.module.ts): Angular 2 module  
  Angular Modules help organize an application into cohesive blocks of functionality.  
  See also [https://angular.io/docs/ts/latest/guide/ngmodule.html](https://angular.io/docs/ts/latest/guide/ngmodule.html)
* [main.ts](public/app/main.ts): Start of Angular 2 application  
  This file is used to bootstrap the Angular 2 application.  
  See also [https://angular.io/docs/ts/latest/guide/ngmodule.html#!#bootstrap](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#bootstrap)
* [systemjs.config.js](public/systemjs.config.js): systemjs configuration (dynamic module loader)

-------------------------------------------------------------

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

1. open shell and clone git repository  
  `git clone <repository-url>`
2. change working directory to project and install node modules  
  `cd <project-dir>`  
  `npm install`
3. transpile the TypeScript files to Javascript files  
  `npm run tsc`
4. start the server  
  `npm run start`
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

Delete the file *main.js*

### Modify package.json

Set proper author and repository and add the following entries to prevent warnings 
and to enable some npm scripts.

```
{
   "scripts": {
      "start": "node server.js",
      "tsc": "tsc",
      "tsc:w": "tsc -w"
    },
   "description": "Express Server with Angular2/TypeScript",
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
npm install systemjs --save
npm install express --save
npm install @angular/core --save
npm install @angular/common --save
npm install @angular/compiler --save
npm install @angular/platform-browser --save
npm install @angular/platform-browser-dynamic --save
npm install morgan --save
npm install typescript --save-dev
```

### Create project files

Create the Node.js server application ([server.ts](server.ts)) and the Angular 2 project files
using the project file structure shown above.


### Transpile TypeScript files into Javascript ES5 files

See also: [https://angular.io/docs/ts/latest/guide/typescript-configuration.html#tsconfig](https://angular.io/docs/ts/latest/guide/typescript-configuration.html#tsconfig)

For transforming the TypeScript source files into ES5 Javascript (which could be executed by each Browser),
the command `tsc` from the Node.js module *typescript* is used.
This tool looks for a configuration file *tsconfig.json*, before it starts to transform all *.ts* files
which can be found in the project directory (and the subdirectories).

* Create file [tsconfig.json](tsconfig.json) in project folder
* Run command `tsc` (or `npm run tsc`) inside shell in project directory

Command `tsc` will end without warnings and create a *.js* and *.js.map* file for each *.ts* file.

At this level you are able to start the server (command `npm run start`),
but some steps are missing up to now and [http://localhost:8080](http://localhost:8080) will not load a valid page (see console output in web-client debugger).

### systemjs for bootstraping Angular 2 application

Create the file [systemjs.config.json](systemjs.config.json) inside public directory.
*systemjs* is a modern dynamic module loader, which is needed to support javascript statements
like `require("@angular/platform-browser-dynamic")`.  
See also: [https://www.npmjs.com/package/systemjs](https://www.npmjs.com/package/systemjs)


### Run the server and load the main page

Open Netbeans Project **Properties** (right mouse click on project) and select Catagory **Run**:

Set in this dialog ...

* Run As: **Node.js Application**
* Start File: **server.js**
* Run Browser: selected
    * Start file: **index.html**
    * Project URL: **http://localhost:8080**

Now you can run the Netbeans Porject and you should see a running Angular 2 application in 
[http://localhost:8080](http://localhost:8080).

### Version Control via GIT

Create the file [.gitignore ](.gitignore) and make sure, that the
npm modules under *node_modules*, the files in *nbproject/private* and the
*.js* files created by tsc are not under version control.
