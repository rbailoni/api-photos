'use strict';

let Categories = require('../models').categories;

module.exports = {
	list: list,
	create: create,
	get: get,
	update: update,
	delete: del
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
			.json({message: 'erro ao criar categoria'});
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
			.json({message: 'erro na busca da categoria'});
	};

	Categories
		.findById(req.params.id)
		.then(success, error);
}

function update (req, res) {
	let success = function (categorie) {
		res
			.status(200)
			.json({
				message:'categoria salva com sucesso',
				'categorie':categorie
			});
	};

	let error = function (err) {
		res
			.status(400)
			.json({message:err.message});
	};

	let successFind = function (categorie) {
		if (!req.body.name) {
			res
				.status(400)
				.json({message:'parametro name nao informado'});
		}else{
			categorie.name = req.body.name;
			categorie
				.save()
				.then(success, error);
		}
	};

	let errorFind = function (err) {
		res
			.status(400)
			.json({message:'id nao encontrado'});
	};

	Categories
		.findById(req.params.id)
		.then(successFind, errorFind);
}

function del (req, res) {
	let success = function () {
		res
			.status(200)
			.json({message:'categoria removida com sucesso'});
	};

	let error = function (err) {
		res
			.status(400)
			.json({message:err.message});
	};

	Categories
		.findByIdAndRemove(req.params.id)
		.then(success, error);
}