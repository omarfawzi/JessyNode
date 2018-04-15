var Faker = require('./Faker');
class GuestsFaker extends Faker{

    constructor(){
        super();
    }

    generateSchema(){
        this.schema = {
            "type": "array",
            "properties": {
              "guest": {
                "guest_photo": {
                  "type": "string",
                  "faker": "image.avatar"
                },
                "guest_name": {
                  "type": "string",
                  "faker": "name.findName"
                },
                "guest_job": {
                  "type": "string",
                  "faker": "name.jobTitle"
                }
              }
            },
            "items": {
              "$ref": "#/properties/guest"
            },
            "minItems":6
          };
    }
  }

module.exports = GuestsFaker;
