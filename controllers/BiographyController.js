var BiographyFaker = require('../fakers/BiographyFaker');

class BiographyController {
    constructor(){
    }

    getFakeBiography(req,res){
        BiographyFaker.prototype.generateSchema();
        BiographyFaker.prototype.printSchema().then(res.send.bind(res)).catch(console.error);
    }
}

module.exports = BiographyController;