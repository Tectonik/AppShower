(function () {
    'use strict';

    function mapDbProjectToClientModel(videosCollection) {
        let resultCollection = [];

        videosCollection.forEach(project => {
            resultCollection.push({
                Id: project.Id,
                Title: project.Title
            });
        });

        return resultCollection;
    }

    module.exports = {
        mapDbProjectToClientModel
    };

} ());
