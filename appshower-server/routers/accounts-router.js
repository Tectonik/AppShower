(function () {
    'use strict';

    const currentRouter = 'accounts';
    console.log(`${currentRouter} router loaded`);

    let express = require('express'),
        data = require('./../data/data.js'),
        db = data.initialize(),
        myRouter = express.Router(),
        currentType = db.data('Users');

    myRouter
    // (request, result, next)
        .put('/login',
            function (request, response) {
                let user = request.body,
                    password = user.Password,
                    username = user.Username;

                db
                    .authentication
                    .login(username, password,
                        function (dataObj) {
                            response
                                .status(201)
                                .json({
                                    result: "User logged in successfully",
                                    tokenInfo: dataObj
                                });
                        },
                        function (error) {
                            response
                                .status(404)
                                .json({
                                    result: "User has not been logged in ",
                                    error: error.message
                                });

                            console.log(error);
                        });
            })
        .put('/logout',
            function (request, response) {
                db
                    .authentication
                    .logout(
                        function () {
                            response
                                .status(201)
                                .json({
                                    result: "User logged out successfully"
                                });
                        },
                        function (error) {
                            response
                                .status(404)
                                .json({
                                    result: "User has not been logged out ",
                                    error: error.message
                                });

                            console.log(error);
                        });
            })
        .post('/register',
            function (request, response) {
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
                        response
                            .status(201)
                            .json({
                                result: "User created successfully"
                            });
                    },
                    function (error) {
                        response
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
        type: currentType,
        initialize: function (app) {
            app.use('/api/auth', myRouter);
        }
    };

} ());