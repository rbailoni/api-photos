'use strict';

let express = require('express');
let app = express();
let routers = require('./routers');
let config = require('./config');
let mongoose = require('mongoose');

app.use('/api', routers.api);

let urlDatabase = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(urlDatabase);
let db = mongoose.connection;
db.on('error', function () {
	console.log('database connection error');
});

db.once('open', function () {
	app.listen('3000');
});

module.exports = app;