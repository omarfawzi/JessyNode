var Faker = require('./Faker');
class VideosFaker extends Faker{

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
                        "faker": "image.image"
                    },
                    "title": {
                        "type": "string",
                        "faker": "lorem.sentence",
                        "maxLength": 15
                    },
                    "link": {
                        "type": "string",
                        "faker": "internet.url"
                    },
                    "duration": {
                        "type": "integer",
                        "maximum":20,
                        "minimum":1
                    }
                }
            },
            "items": {
                "$ref": "#/properties/video"
            },
            "minItems": 6
        };
    }

}

module.exports = VideosFaker;