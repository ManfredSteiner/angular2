/* global __dirname */

const express = require("express");
const logger = require("morgan");
const path = require("path");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

function sendSpaFileIfUnmatched (req,res) {
  res.sendFile("index.html", { root: path.join(__dirname, '../public') });
}

const heroes = [
  { id: 1, name: 'Mr. One' },
  { id: 2, name: 'Mr. Two' },
  { id: 3, name: 'Mr. Three' }
];


router.get("/heroes/:id", function(req, res) {
  console.log("router: " + req.method + " " + req.url);
  if (req.params.id) {
    let hero = heroes.find(hero => hero.id == req.params.id); 
    if (hero) {
      let responseBody = {};
      responseBody.data = hero;
      console.log("   --> 200(OK): " + JSON.stringify(responseBody));
      res.json(responseBody);
      return;
    }
  }
  console.log("   --> 404(NOT FOUND)");
  res.status(404).end();
});


router.get("/heroes", function(req, res) {
  console.log("router: " + req.method + " " + req.url );
  let responseBody = { };
  if (req.query && req.query.name) {
    let heroesMatching = heroes.filter(hero => hero.name.search(req.query.name) >= 0);
    responseBody.data = heroesMatching;
  }
  else
    responseBody.data = heroes;
  console.log("   --> 200(OK): " + JSON.stringify(responseBody));
  res.json(responseBody);
});


router.post("/heroes", function(req, res) {
  console.log("router: " + req.method + " " + req.url );
  if (req.body && req.body.name && req.body.name.length > 0) {
    console.log("   <-- " + JSON.stringify(req.body));
    let id = heroes.length === 0 ? 1 : heroes[heroes.length-1].id + 1;
    newHero = { id:id, name:req.body.name };
    heroes.push(newHero);
    let responseBody = { };
    responseBody.data = newHero;
    console.log("   --> 200(OK): " + JSON.stringify(responseBody));
    res.json(responseBody);
    return;
  }
  console.log("   --> 400(BAD REQUEST)");
  res.status(400).end();
});


router.delete("/heroes/:id", function(req, res) {
  console.log("router: " + req.method + " " + req.url);
  if (req.params.id) {
    let heroIndex = heroes.findIndex(hero => hero.id == req.params.id); 
    if (heroIndex > -1) {
      heroes.splice(heroIndex, 1);
      console.log("   --> 200(OK)");
      res.status(200).end();
      return;
    }
  }
  console.log("   --> 404(NOT FOUND)");
  res.status(404).end();
});


router.put("/heroes/:id", function(req, res) {
  console.log("router: " + req.method + " " + req.url);
  if (req.body && typeof(req.body.id) === 'number' && 
      req.body.name && typeof(req.body.name)=== 'string' &&
      req.body.name.length > 0) {
    let heroIndex = heroes.findIndex(hero => hero.id == req.params.id);
    if (heroIndex > -1) {
      heroes[heroIndex].name = req.body.name;
      console.log("   <-- " + JSON.stringify(req.body));
      console.log("   --> 200(OK)");
      res.status(200).end();
      return;
    }
  };
  console.log("   --> 405(METHOD NOT ALLOWED)");
  res.status(405).end();
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use('/api', router);
app.use(express.static(path.join(__dirname, '../public')));
//app.use(sendSpaFileIfUnmatched);

console.log('Starting Web-Server on Port 8080');
app.listen(8080);
