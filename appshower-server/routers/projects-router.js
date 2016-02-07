(function () {
    'use strict';

    const currentRouter = 'projects';
    console.log(`${currentRouter} router loaded`);

    const constants = require('./../helpers/constants');
    let express = require('express'),
        helpers = require('./../helpers/helpers'),
        mapper = require('./../helpers/mapper'),
        data = require('./../data/data.js'),
        db = data.initialize(),
        myRouter = express.Router(),
        currentTypeData = db.data('Projects');

    myRouter
        .get('/', function (request, response) {
            data
                .getAllWithQuery(currentTypeData)
                .then(function (result) {
                    response
                        .status(200)
                        .json({
                            result: mapper
                                .mapDbProjectToClientModel(result)
                        });

                    console.log(`get on ${currentRouter} successful`);
                },
                    function (error) {
                        console.log(`get on ${currentRouter} unsuccessful`);
                        response.status(500).json({
                            error: error.message
                        });
                    });
        }, function (error) {

            console.log(error);
        })
        .put('/', function (request, response) {

        }, function (error) {

            console.log(error);
        })
        .post('/', function (request, response) {

        }, function (error) {

            console.log(error);
        });

    module.exports = {
        controller: {},
        typeData: currentTypeData,
        initialize: function (app) {
            app.use('/api/projects', myRouter);
        }
    };

} ());
