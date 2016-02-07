(function () {
    'use strict';

    const constants = require('./helpers/constants.js');
    let express = require('express'),
        bodyParser = require('body-parser');

    let app = express();
    require(constants.ROUTERS_LOCATION)(app);
    app.use(bodyParser.json());

    app.listen(constants.PORT, function () {
        console.log(`Not-Voltron is running on port ${constants.PORT}`);
    });

} ());
