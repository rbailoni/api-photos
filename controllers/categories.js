'use strict';

let Categories = require('../models').categories;

module.exports = {
	list: list,
	create: create,
	get: get
};

function list (req, res) {
	let success = function (categories) {
		res
			.status(200)
			.json(categories);
	}

	let error = function (err) {
		console.log(err);
		res
			.status(400)
			.json({message: 'problema na requisição'});
	}
	Categories
		.find({})
		.then(success, error);
}

function create (req, res) {
	let categorie = new Categories(req.body);
	let success = function (status) {
		res
			.status(201)
			.json({
				message: 'created',
				'categorie': categorie
			});
	};

	let error = function (err) {
		res
			.status(400)
			.json({message: 'erro ao criar usuario'});
	};

	categorie
		.save()
		.then(success, error);
}

function get (req, res) {
	let success = function (categorie) {
		res
			.status(200)
			.json(categorie);
	};

	let error = function (err) {
		res
			.status(400)
			.json({message: 'erro na busca da categorie'});
	};

	Categories
		.findById(req.params.id)
		.then(success, error);
}