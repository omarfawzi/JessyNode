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
                  "name": {
                      "type": "string",
                      "faker": "name.findName"
                  },
                  "intro": {
                      "type": "string",
                      "faker": "lorem.paragraphs"
                  },
                  "job": {
                    "type": "string",
                    "faker": "name.jobTitle"
                  }
              },
              "required": [
                  "photo",
                  "name",
                  "intro",
                  "job"
              ]
          };
    }
  }

module.exports = BannerFaker;
