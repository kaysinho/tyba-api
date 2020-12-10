const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var session = require('express-session')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret : 'sdjfgajh4h5p324h3ph23',
    resave : false,
    saveUninitialized: false
}))

const routes = require('./routes/routes.js');
require('./mysql/mysql');

//Settings
app.set('port', 3000);

//Database

//Routes
app.use('/', routes)


module.exports = app;