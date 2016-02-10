// (function () {
//     'use strict';
//     console.log("Helpers loading...");

//     const constants = require('./constants.js');
//     let fileSystem = require('fs');

//     let exportedHelpers = {};
//     function initialize(app) {
//         fileSystem
//             .readdirSync(constants.HELPERS_LOCATION)
//             .filter(file => file !== 'index.js')
//             .forEach((file) => {
//                 let currentHelper = require(`./${file}`);
//                 exportedHelpers[currentHelper.helperName] = currentHelper;
//             });
//     };

//     module.exports = exportedHelpers;

// } ());