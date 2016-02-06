(function () {
    'use strict';

    const currentRouter = 'Fake data';
    console.log(`${currentRouter} router loaded`);

    const constants = require('./../helpers/constants');
    let express = require('express'),
        helpers = require('./../helpers/helpers'),
        mapper = require('./../helpers/mapper'),
        data = require('./../data/data.js'),
        // db = data.initialize(),
        myRouter = express.Router();

    myRouter
        .get('/comments', function (request, response) {

            // data.createInstanceOfType('Project', { Name: "My little pony" })
            //     .then(function (results) {
            //         response.status(200).json(results);
            //     }, function (error) {
            //         response.status(500).json(error);
            //     });

            data
                .getAllWithQuery("Project")
                .then(function (result) {

                    response.status(200).json(result);

                }, function (error) {
                    response.status(500).json(error);
                });
        });

    module.exports = {
        controller: {},
        initialize: function (app) {
            app.use('/api/initialize', myRouter);
        }
    };

} ());
