var Faker = require('./Faker');
class TestimonialsFaker extends Faker {

  constructor() {
    super();
  }

  generateSchema() {
    this.schema = {
      "type": "array",
      "properties": {
        "testimonial": {
          "photo": {
            "type": "string",
            "faker": "image.avatar"
          },
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "bio": {
            "type": "string",
            "faker": "lorem.paragraphs"
          }
        }
      },
      "items": {
          "$ref": "#/properties/testimonial"
      },
      "minItems": 6
    };
  }

}

module.exports = TestimonialsFaker;
