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
        .get('/comments', function (request, response) {

            let users = [];
            data
                .getAllWithQuery("Users")
                .then(function (result) {
                    for (var index = 0; index < users.length; index++) {

                        users = result.result;

                        let newComment = {
                            CreatedAt: new Date(),
                            ModifiedAt: new Date(),
                            CreatedBy: request.body.CreatedBy,
                            ModifiedBy: request.body.ModifiedBy,
                            Owner: request.body.Owner,
                            Text: request.body.Text,
                            Rating: request.body.Rating
                        };

                        currentTypeData
                            .create(newComment)
                            .then(function (response) {

                                let temp = [];
                                temp.push(response.result);

                                res
                                    .status(201)
                                    .json({
                                        result: mapper
                                            .mapDbCommentModelToClientModel(temp)
                                    });

                                console.log(`post on ${currentRouter} unsuccessful`);
                            },
                                // TODO: HANDLE THIS
                                function (error) {
                                    console.log(error);

                                    console.log(`post on ${currentRouter} unsuccessful`);
                                });
                    }, function (error) {

                        console.log(error);
                    });

        });

    module.exports = {
        controller: {},
        typeData: currentTypeData,
        initialize: function (app) {
            app.use('/api/initialize', myRouter);
        }
    };

} ());
