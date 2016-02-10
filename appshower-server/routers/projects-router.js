(function () {
    'use strict';

    const currentRouter = 'projects',
        constants = require('./../helpers/constants');

    console.log(`${currentRouter} router loaded`);

    let express = require('express'),
        helpers = require('./../helpers/helpers'),
        mapper = require('./../helpers/mapper'),
        data = require('./../data/data.js'),
        db = data.initialize(),
        router = express.Router(),
        currentType = db.data('Project');

    router
        .get('/',
            function (request, response) {
                data
                    .getAllWithQuery(currentType)
                    .then(
                        function (result) {
                            console.log(`get on ${currentRouter} successful`);
                            response
                                .status(200)
                                .json({
                                    result: mapper
                                    [`mapDb${currentType}ToClientModel`](result)
                                });
                        },
                        function (error) {
                            console.log(`get on ${currentRouter} unsuccessful. Error: \n    ${error}`);
                            response
                                .status(500)
                                .json({
                                    error: error.message
                                });
                        });
            },
            function (error) {

                console.log(error);

            })
        .put('/',
            function (request, response) {

            },
            function (error) {

                console.log(error);

            })
        .post('/',
            function (request, response) {

            },
            function (error) {

                console.log(error);

            });

    module.exports = {
        controller: {},
        type: currentType,
        initialize: function (app) {
            app.use('/api/projects', router);
        }
    };

} ());