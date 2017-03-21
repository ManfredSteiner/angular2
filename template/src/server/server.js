/* global __dirname */

const express = require("express");
const logger = require("morgan");
const path = require("path");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');


// ***************** Router ***********************

router.get("/test", function(req, res) {
  console.log("  --> router: " + req.method + " " + req.url );
  let responseBody = { info : "Welcome!" };
  console.log("   --> 200(OK): " + JSON.stringify(responseBody));
  res.json(responseBody);
});

router.get("/test/:id", function(req, res) {
  console.log("  --> router: " + req.method + " " + req.url);
  if (req.params.id) {
    let id = +req.params.id;
    if (id > 1 && id < 10) {
      let responseBody = {};
      responseBody.data = id;
      console.log("      --> 200(OK): " + JSON.stringify(responseBody));
      res.json(responseBody);
      return;
    }
  }
  console.log("      --> 404 (NOT FOUND)");
  res.status(404).end();
});


function sendIndexFileIfUnmatched (req,res) {
  res.sendFile("index.html", { root: path.join(__dirname, '../../public') });
}

// ************************************************

app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));
app.use('/db', router);
console.log(path.join(__dirname, '../../public'));
app.use(express.static(path.join(__dirname, '../../public')));
//app.use(sendIndexFileIfUnmatched);

console.log('Starting Web-Server on Port 8080');
app.listen(8080);