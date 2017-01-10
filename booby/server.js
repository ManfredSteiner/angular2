
/* global __dirname */

const express = require('express');
const logger = require('morgan');
const path = require('path');       // https://nodejs.org/api/path.html

const app = express();

app.use(logger('dev'));
app.use('/', express.static('./public'));
//app.use('/node_modules', express.static('./node_modules'));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.listen(8080);
