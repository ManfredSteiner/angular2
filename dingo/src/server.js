/* global __dirname */

const express = require("express");
const logger = require("morgan");
const path = require("path");
const app = express();

app.use(logger('dev'));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../public')));

console.log('Starting Web-Server in Port 8080');
app.listen(8080);
