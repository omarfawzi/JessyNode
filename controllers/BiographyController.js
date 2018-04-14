var BiographyFaker = require('../fakers/BiographyFaker');

class BiographyController {
    constructor(){
    }

    getFakeBiography(req,res){
        BiographyFaker.prototype.generateSchema();
        BiographyFaker.prototype.printSchema(req,res);
    }
}

module.exports = BiographyController;