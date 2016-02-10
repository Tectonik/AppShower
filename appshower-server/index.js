(function () {
    'use strict';

    const constants = require('./helpers/constants.js'),
        locations = require('./helpers/locations.js');

    let express = require('express'),
        bodyParser = require('body-parser');

    let app = express();
    require(locations.ROUTERS_LOCATION)(app);
    app.use(bodyParser.json());

    // TODO: sfds
    app.listen(constants.PORT, function () {
        console.log(`Not-Voltron is running on port ${constants.PORT}`);
    });

} ());