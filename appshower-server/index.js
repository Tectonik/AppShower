(function() {
	'use strict';
	let express = require('express'),
		bodyParser = require('body-parser');

	var app = express();
	app.use(bodyParser.json());

	app.set('port', (process.env.PORT || 13337));

	app.use(express.static(__dirname + '/public'));

	// views is directory for all template files
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');

	app.get('/', function(request, response) {
		response.render('pages/index');
	});

	app.listen(app.get('port'), function() {
		console.log('Node app is running on port', app.get('port'));
	});
}());
