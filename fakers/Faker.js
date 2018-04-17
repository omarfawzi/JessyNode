var jsf = require('json-schema-faker');

jsf.extend('faker', function() {
    return require('faker');
});

class Faker {

    constructor(){
        this.schema = null;
    }

    printSchema(){
        return new Promise((resolve, reject) => {
            jsf.resolve(this.schema).then(function(result) {
                resolve(result);
            });
        });
    }
}

module.exports = Faker;