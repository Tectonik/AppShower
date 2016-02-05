(function() {
	'use strict';
	let express = require('express'),
		bodyParser = require('body-parser'),
		constants = require('./helpers/constants.js');

	let app = express();
	app.use(bodyParser.json());

	app.listen(constants.PORT, function() {
		console.log(`Patrick is running on port ${constants.PORT}`);
	});
}());
