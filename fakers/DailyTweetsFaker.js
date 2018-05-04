var Faker = require('./Faker');

class DailyTweetsFaker extends Faker{

    constructor(){
        super();
    }

    generateSchema(){
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
                        "maxLength":10
                    },
                    "link": {
                        "type": "string",
                        "faker": "internet.url"
                    }
                }
            },
            "items": {
                "$ref": "#/properties/video"
            },
            "minItems":6
        };
    }
}

module.exports = DailyTweetsFaker;
