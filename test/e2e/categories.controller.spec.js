'use strict';

let helper = require('../helper.js');
var app = require('../../app.js');
var request = require('supertest');
var chai = require('chai');
chai.use(require('chai-things'));
var expect = chai.expect;
// let Categories = require('../../models').categories;
let bef = require('./before.js'); 
// let categorieTest = {
// 	name:'Categorie Teste e2e',
// 	test:true
// };


describe('Categories controller', function () {
	// before(function (done) {
	// 	let success = function (categorie) {
	// 		categorieTest._id = categorie._id;
	// 		console.log(categorieTest);
	// 		done();
	// 	};

	// 	let categorie = new Categories(categorieTest);
	// 	categorie
	// 		.save()
	// 		.then(success);
	// });

	before(bef.categorieBefore);

	describe('.list /GET /api/categories', function () {
		it('should return a json array', function (done) {
			console.log(categorieTest);
			request(app)
				.get('/api/categories')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body).all.have.property('name');
					done();
				});
		});
	});

	describe('.create /POST /api/categories', function () {
		it(`should return a message 'created' and object categorie`, function (done) {
			console.log(helper);
			request(app)
				.post('/api/categories')
				.field('name', 'Categorie Teste e2ee')
				.field('test', 'true')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(201);
					expect(res.body).have.property('message', 'created');
					expect(res.body).have.property('categorie');
					done();
				});
		});

		it(`should return a message 'erro ao criar categoria'`, function (done) {
			request(app)
				.post('/api/categories')
				.field('name', 'Categorie Teste e2ee')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(400);
					expect(res.body).have.property('message', 'erro ao criar categoria');
					done();
				});
		});
	});

	describe('.get /GET /api/categories/:id', function () {
		it(`should return object categorie`, function (done) {
			console.log(helpers);
			request(app)
				.get('/api/categories/'+helpers.categorie._id)
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).have.property('name');
					done();
				});
		});

		it(`should return a message 'erro na busca da categoria'`, function (done) {
			request(app)
				.get('/api/categories/'+helpers.categorie.invalidID)
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(400);
					expect(res.body).have.property('message', 'erro na busca da categoria');
					done();
				});
		});
	});

	describe('.update /PUT /api/categories/:id', function () {
		it(`should return message 'categoria salva com sucesso' and object categorie`, function (done) {
			request(app)
				.put('/api/categories/'+helpers.categorie._id)
				.field('name',helpers.categorie.name)
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).have.property('message', 'categoria salva com sucesso');
					expect(res.body).have.property('categorie');
					done();
				});
		});

		it(`should return message 'id nao encontrado'`, function (done) {
			request(app)
				.put('/api/categories/'+helpers.categorie.invalidID)
				.field('name','Paisagens')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(400);
					expect(res.body).have.property('message', 'id nao encontrado');
					done();
				});
		});

		it(`should return message error`, function (done) {
			request(app)
				.put('/api/categories/'+helpers.categorie._id)
				.field('name','Categorie Teste e2ee')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(400);
					expect(res.body).have.property('message');
					done();
				});
		});

		it(`should return message 'parametro name nao informado'`, function (done) {
			request(app)
				.put('/api/categories/'+helpers.categorie._id)
				.field('names',helpers.categorie.name)
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(400);
					expect(res.body).have.property('message', 'parametro name nao informado');
					done();
				});
		});
	});
});