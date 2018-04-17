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
                      "faker": "lorem.sentence"
                  },
                  "bio": {
                      "type": "string",
                      "faker": "lorem.paragraphs"
                  },
                  "guest_job": {
                    "type": "string",
                    "faker": "name.jobTitle"
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

module.exports = BannerFaker;
