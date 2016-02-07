(function () {
    'use strict';
    console.log("Routers loading...");

    const constants = require('./../helpers/constants.js');
    let fileSystem = require('fs');

    module.exports = function (app) {
        fileSystem
            .readdirSync(constants.ROUTERS_LOCATION)
            .filter(file => file !== 'index.js')
            .forEach(file => require(`./${file}`).initialize(app));
    };

}());
