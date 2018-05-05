var Faker = require('./Faker');
class BannerFaker extends Faker{

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
                "job":{
                    "type":"string",
                    "faker": "name.jobTitle"
                },
                "name": {
                    "type": "string",
                    "faker": "name.findName"
                },
                "brief": {
                    "type": "string",
                    "faker": "lorem.paragraph"
                }
            },
            "required": [
                "photo",
                "name",
                "brief",
                "job"
            ]
        };
    }

}

module.exports = BannerFaker;
