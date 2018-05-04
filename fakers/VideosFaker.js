var Faker = require('./Faker');
var jsf = require('json-schema-faker');

var youtube = require('youtube-random-video');

class VideosFaker extends Faker {

    constructor() {
        super();
    }

    generateSchema() {
        this.schema = {
            "type": "array",
            "properties": {
                "video": {
                    "id": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 100
                    },
                    "preview": {
                        "type": "string",
                        "faker": "image.avatar"
                    },
                    "title": {
                        "type": "string",
                        "faker": "lorem.sentence",
                        "maxLength": 15
                    },
                    "duration": {
                        "type": "integer",
                        "maximum": 20,
                        "minimum": 1
                    }
                }
            },
            "items": {
                "$ref": "#/properties/video"
            },
            "minItems": 6,
            "maxItems": 6
        };
    }

    printSchema() {
        var fakeSchema = new Promise((resolve, reject) => {
            jsf.resolve(this.schema).then(function (result) {
                resolve(result);
            });
        });
        let promises = [];
        promises.push(fakeSchema);
        for (var i = 0; i < 6; i++) {
            promises.push(new Promise((resolve) => {
                    youtube.getRandomVid('AIzaSyAvIAy_smbYq_GCbWuyzqKIZqcRFZ7UgeU', function (err, data) {
                        resolve(data.id.videoId);
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