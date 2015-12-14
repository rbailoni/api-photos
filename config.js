'use strict';

let config = {
	development:{
		db:{
			host:'localhost',
			port:27017,
			name:'api_photos_test'
		}
	},
	production:{
		db:{
			host:'localhost',
			port:27017,
			name:'api_photos'
		}
	}
};

var env = process.env.NODE_ENV || 'development';
module.exports = config[env];