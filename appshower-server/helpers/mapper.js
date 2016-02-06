(function () {
    'use strict';

    function mapDbProjectToClientModel(videosCollection) {
        let resultCollection = [];

        videosCollection.forEach(video => {
            resultCollection.push({
                Id: video.Id,
                Title: video.Title
            });
        });

        return resultCollection;
    }

    module.exports = {
        mapDbProjectToClientModel
    };

} ());
