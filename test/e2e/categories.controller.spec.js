'use strict';

var app = require('../../app.js');
var request = require('supertest');
var chai = require('chai');
chai.use(require('chai-things'));
var expect = chai.expect;

describe('Categories controller', function () {
	describe('.list /GET /api/categories', function () {
		it('should return a json array', function (done) {
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
			request(app)
				.post('/api/categories')
				.field('name', 'Categorie Teste4')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(201);
					expect(res.body).have.property('message', 'created');
					expect(res.body).have.property('categorie');
					done();
				});
		});

		it(`should return a message 'erro ao criar usuario'`, function (done) {
			request(app)
				.post('/api/categories')
				.field('name', 'Categorie Teste')
				.end(function (err, res) {
					expect(res.statusCode).to.be.equal(400);
					expect(res.body).have.property('message', 'erro ao criar usuario');
					done();
				});
		});
	});
});