var FakerFactory = require('../factories/FakerFactory');

class Controller {

    constructor(){
        this.faker = null;
    }

    getFakeData(req,res){
        FakerFactory.prototype.getFaker(this.faker).prototype.generateSchema();
        FakerFactory.prototype.getFaker(this.faker).prototype.printSchema().then(function (result) {
            let limit = parseInt(req.query.limit || result.length);
            let offset = parseInt(req.query.offset || 0);
            return Array.isArray(result) ? result.slice(offset, limit + offset) : result ;
        }, function (err) {
            console.log(err);
        }).then(res.send.bind(res));
    }
}

module.exports = Controller;