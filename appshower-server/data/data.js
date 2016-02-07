(function () {
    'use strict';

    const constants = require('./../helpers/constants');
    let Everlive = require('everlive-sdk'),
        el = new Everlive({
            appId: '4l7wacjxymhqahsg',
            scheme: 'http'
        }),
        mapper = require(constants.MAPPER_LOCATION);

    //let myQuery = new everlive.Query();
    //myQuery.where().isin('Name', ['Doncho', 'Evlogi']);

    // let telerikCourseData = el.data('TelerikCourse');

    function getAllWithQuery(typeData, query) {
        return new Promise((resolve, reject) => {
            el.data(typeData)
                .withHeaders({
                    "X-Everlive-Expand": {
                        "Authors": true
                    }
                })
                .get(query)
                .then(function (response) {
                    resolve(response.result);
                },
                    function (error) {
                        reject(error);
                    });
        });
    }

    function createInstanceOfType(type, instance) {
        return new Promise((resolve, reject) => {

            return new Promise((resolve, reject) => { });

            el.data(type)
                .create(instance)
                .then(function (response) {

                    let temp = [];
                    temp.push(response.result);

                    resolve({
                        result: mapper[`mapDb${type}ModelToClientModel`](temp),
                        successful: true
                    });
                }, function (error) {
                    reject({
                        result: null,
                        successful: false
                    });
                });
        });




    }

    module.exports = {
        initialize: function () {
            return el;
        },
        createQuery: function () {
            return new Everlive.Query();
        },
        data: el.data,
        getAllWithQuery,
        createInstanceOfType
    };

} ());