declare var __dirname;

import * as express from "express";
import * as logger from 'morgan';

const app = express();
app.use(logger('dev'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.listen(8080);
