# Project Lizard

|  |  |
| --- | ---------- |
| ![Project Logo][1] | This is a [Lizard (Eidechse)][2] |
 
## Angular Turorial HTTP

This project shows ...

* how to make HTTP calls to a remote server's web API
* how to add, edit or delete users
* how to save that changes back to the server
* how to use [Angular 2 In-Memory-Web-API][3] to emulate the web server
* how to implement the data management in the express web-server

   [1]: images/lizard.png
   [2]: https://a-z-animals.com/animals/lizard/
   [3]: https://www.npmjs.com/package/angular2-in-memory-web-api
   [4]: https://angular.io/docs/ts/latest/tutorial/toh-pt6.html
   [5]: src/ng2/app/app.module.ts#L22
   [6]: src/server.js

Open [Angular 2 Tutorial HTTP][4] and work through.

Comment out the line  `InMemoryWebApiModule.forRoot(InMemoryDataService),` 
in file [app.module.ts][5] to disable [Angular 2 In-Memory-Web-API][3] and
to use the data mangement i the express web server instead (see file [server.js][6])

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
  `cd <project-dir>/lizard`  
  `npm install`
3. build the project and start the server  
  `npm start`
4. start a web-client and test the server  
  [http://localhost:8080](http://localhost:8080)

-------------------------------------------------------------
