'use strict';

let Router = require('express').Router;
let router = new Router();
let controllers = require('../controllers');
let bobyParser = require('body-parser');
let multer = require('multer')();

router.use(bobyParser.urlencoded({extended: false}));
router.use(bobyParser.json());
router.use(multer.array());

router
	.route('/categories')
	.get(controllers.categories.list)
	.post(controllers.categories.create);

router
	.route('/categories/:id')
	.get(controllers.categories.get)
	.put(controllers.categories.update)
	.delete(controllers.categories.delete);

module.exports = router;