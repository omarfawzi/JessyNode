var Faker = require('./Faker');

class GalleryFaker extends Faker {

    constructor() {
        super();
    }

    generateSchema() {
        this.schema = {
            "type": "array",
            "properties": {
                "galleryItem": {
                    "id": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 100
                    },
                    "photo": {
                        "type": "string",
                        "faker": "image.avatar"
                    },
                    "bio": {
                        "type": "string",
                        "faker": "lorem.word"
                    }
                }
            },
            "items": {
                "$ref": "#/properties/galleryItem"
            },
            "minItems": 6
        };
    }
}

module.exports = GalleryFaker;
