'use strict';

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;

let schema = new Schema({
	name: {type: String, unique: true, required: true},
	test: {type: Boolean, default: false},
	createdAt: {type: Date, set: Date.now}
});

module.exports = mongoose.model('categories', schema);