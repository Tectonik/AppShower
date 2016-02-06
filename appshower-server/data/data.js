(function() {
	'use strict';

	const constants = require('./../helpers/constants');
	let Everlive = require('everlive-sdk'),
		el = new Everlive('4l7wacjxymhqahsg');
	//let myQuery = new everlive.Query();
	//myQuery.where().isin('Name', ['Doncho', 'Evlogi']);

	// let telerikCourseData = el.data('TelerikCourse');

	function getAllWithQuery(typeData, query) {
		return new Promise((resolve, reject) => {
			typeData
				.get(query)
				.then(function(response) {
						resolve(response.result);
					},
					function(error) {
						reject(error);
					});
		});
	}

	module.exports = {
		initialize: function() {
			return el;
		},
		createQuery: function() {
			return new Everlive.Query();
		},
		data: el.data,
		getAllWithQuery: getAllWithQuery
	};

}());
