var jsf = require('json-schema-faker');

jsf.extend('faker', function() {
    var faker = require('faker');
    faker.locale = "en_US";
    return faker;
});

class Faker {
    constructor(){
        this.schema = null;
    }

     printSchema(req,res){
         jsf.resolve(this.schema).then(function(result) {
             res.send(result);
         });
    }
}

module.exports = Faker;