(function () {
    'use strict';

    const currentRouter = 'accounts';
    console.log(`${currentRouter} router loaded`);

    const constants = require('./../helpers/constants');
    let express = require('express'),
        helpers = require('./../helpers/helpers'),
        mapper = require('./../helpers/mapper'),
        data = require('./../data/data.js'),
        db = data.initialize(),
        myRouter = express.Router(),
        currentTypeData = db.data('Users');

    myRouter
    // (request, result, next)
        .put('/login', function (request, result) {
            let user = request.body,
                password = user.Password,
                username = user.Username;

            db.authentication.login(username, password, function (dataObj) {
                result
                    .status(201)
                    .json({
                        result: "User logged in successfully",
                        tokenInfo: dataObj
                    });
            }, function (error) {
                result
                    .status(404)
                    .json({
                        result: "User has not been logged in ",
                        error: error.message
                    });

                console.log(error);
            });
        })
        .put('/logout', function (request, result) {
            db.authentication.logout(function () {
                result
                    .status(201)
                    .json({
                        result: "User logged out successfully"
                    });
            }, function (error) {
                result
                    .status(404)
                    .json({
                        result: "User has not been logged out ",
                        error: error.message
                    });

                console.log(error);
            });
        })
        .post('/register', function (request, result) {
            let newUser = request.body,
                password = newUser.Password,
                username = newUser.Username,
                otherAttributes = {
                    Email: newUser.Email,
                    DisplayName: newUser.DisplayName,
                    CreatedAt: new Date(),
                    ModifiedAt: new Date(),
                    Courses: newUser.Courses,
                    Image: newUser.Image
                };

            db.Users.register(username, password, otherAttributes,
                function (dataObj) {
                    result
                        .status(201)
                        .json({
                            result: "User created successfully"
                        });
                },
                function (error) {
                    result
                        .status(404)
                        .json({
                            result: "User has not been created",
                            error: error.message
                        });

                    console.log(error);
                });
        });

    module.exports = {
        controller: {},
        typeData: currentTypeData,
        initialize: function (app) {
            app.use('/api/auth', myRouter);
        }
    };
} ());
