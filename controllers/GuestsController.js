var GuestsFaker = require('../fakers/GuestsFaker');

class GuestsController {
    constructor(){
    }

    getFakeGuests(req,res){
        GuestsFaker.prototype.generateSchema();
        GuestsFaker.prototype.printSchema().then(res.send.bind(res)).catch(console.error);
    }
}

module.exports = GuestsController;
