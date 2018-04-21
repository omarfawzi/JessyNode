var Faker = require('./Faker');

class GuestsFaker extends Faker {

    constructor() {
        super();
    }

    generateSchema() {
        this.schema = {
            "type": "array",
            "properties": {
                "guest": {
                    "id": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 100
                    },
                    "photo": {
                        "type": "string",
                        "faker": "image.avatar"
                    },
                    "name": {
                        "type": "string",
                        "faker": "name.findName"
                    },
                    "job": {
                        "type": "string",
                        "faker": "name.jobTitle"
                    }
                }
            },
            "items": {
                "$ref": "#/properties/guest"
            },
            "minItems": 6
        };
    }
}

module.exports = GuestsFaker;
