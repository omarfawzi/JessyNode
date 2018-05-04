var Faker = require('./Faker');
var jsf = require('json-schema-faker');

var youtube = require('youtube-random-video');

class VideosFaker extends Faker {

    constructor() {
        super();
    }

    generateSchema() {

    }

    printSchema() {
        let promises = [];
        for (var i = 0; i < 6; i++) {
            promises.push(new Promise((resolve) => {
                    youtube.getRandomVid('AIzaSyAvIAy_smbYq_GCbWuyzqKIZqcRFZ7UgeU', function (err, data) {
                        resolve(data);
                    });
                })
            );
        };
        return new Promise((resolve)=>{
          Promise.all(promises).then(results=>{
              resolve(results);
          })
        });
    }



}

module.exports = VideosFaker;