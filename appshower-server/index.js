(function() {
	'use strict';
	let express = require('express'),
		bodyParser = require('body-parser')
		constants = require('./helpers/constants.js');

	var app = express();
	app.use(bodyParser.json());

	app.set('port', (process.env.PORT || 1337));

	app.listen(constants.PORT, function() {
		console.log('Node app is running on port', app.get('port'));
	});
}());
