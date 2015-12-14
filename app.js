'use strict';

var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');

let urlDatabase = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(urlDatabase);
let db = mongoose.connection;
db.on('error', function () {
	console.log('database connection error');
});

db.once('open', function () {
	app.listen('3000', ()=>console.log('> localhost:3000'));
});

console.log(config.db.name);