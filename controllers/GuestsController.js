var GuestsFaker = require('../fakers/GuestsFaker');

class GuestsController {
    constructor(){
    }

    getFakeGuests(req,res){
        GuestsFaker.prototype.generateSchema();
        GuestsFaker.prototype.printSchema(req,res);
    }
}

module.exports = GuestsController;
