# Project Kiwi

|  |  |
| --- | ---------- |
| ![Project Logo](images/kiwi.png) | This is a [Kiwi (Kiwi)](https://a-z-animals.com/animals/kiwi/) |
 
## Angular 2 Tutorial Routing

This project shows ...

* how to use Angluar 2 services to manage data


Open [Angular 2 Tutorial Routing](https://angular.io/docs/ts/latest/tutorial/toh-pt5.html)
and work through. Some additional infos are given in chapter 
[Manual reloading problem](#manual-reloading-problem) 

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
  `cd <project-dir>/kiwi`  
  `npm install`
3. build the project and start the server  
  `npm start`
4. start a web-client and test the server  
  [http://localhost:8080](http://localhost:8080)

-------------------------------------------------------------

## Manual reloading problem

See also: [http://stackoverflow.com/questions/31415052](http://stackoverflow.com/questions/31415052)

**What's the problem?**

Clicking on button dashboard activates the link 
[http://localhost:8080/dashboard](http://localhost:8080/dashboard).  
If you make a manual reload on this link the browser will return an error.

**What's the cause?**

The express server [server.js](src/server.js) does not return *index.html*
in case of resource /dashboard.

**Solution 1:**

Switch to **HashLocationStrategy**. 
Add `{ useHash: true }` in file [app-routing.module.ts](src/ng2/app/app-routing.module.ts)
on line `imports:`.

```
@NgModule({  
  imports: [ RouterModule.forRoot(routes, { useHash: true}) ],  
  exports: [ RouterModule ]  
})  
```

Now the link is [http://localhost:8080/#/dashboard](http://localhost:8080/#/dashboard),
and the server will return *index.html* for / (before the hash).

**Solution 2:**

Add some middleware in the express server.
If the resource is not known the file *index.html* is sent back.

```
function sendSpaFileIfUnmatched(req,res) {
    res.sendFile("index.html", { root: path.join(__dirname, '../public') });
}
...
app.use(sendSpaFileIfUnmatched);
...
```
