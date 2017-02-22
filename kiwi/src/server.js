/* global __dirname */

const express = require("express");
const logger = require("morgan");
const path = require("path");
const app = express();

function sendSpaFileIfUnmatched(req,res) {
    res.sendFile("index.html", { root: path.join(__dirname, '../public') });
}

app.use(logger('dev'));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../public')));
//app.use(sendSpaFileIfUnmatched);

console.log('Starting Web-Server on Port 8080');
app.listen(8080);
