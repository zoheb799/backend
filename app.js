const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var bodyparser = require('body-Parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
dotenv.config({ path: './config.env' });
 require('./db/connection');
 app.use(require('./router/auth'));

 const PORT = process.env.PORT;
app.listen(PORT, function() {
    console.log('APP RUNNING AT PORT NO 3000');
});