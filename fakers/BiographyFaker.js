var Faker = require('./Faker');
class BiographyFaker extends Faker{

    constructor(){
        super();
    }

    generateSchema(){
        this.schema = {
            "type": "object",
            "properties": {
                "photo":{
                    "type":"string",
                    "faker" : "image.avatar"
                },
                "title": {
                    "type": "string",
                    "faker": "name.findName"
                },
                "bio": {
                    "type": "string",
                    "faker": "lorem.paragraphs"
                }
            },
            "required": [
                "photo",
                "title",
                "bio"
            ]
        };
    }

}

module.exports = BiographyFaker;
