const express = require('express');
const app = express();

const routes = require('./routes/routes.js');
require('./mysql/mysql');

//Settings
app.set('port', 3000);

//Database

//Routes
app.use('/', routes)

//Static Files


module.exports = app;