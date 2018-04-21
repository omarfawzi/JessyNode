var GuestsFaker = require('../fakers/GuestsFaker');

class GuestsController {
    constructor() {
    }

    getFakeGuests(req, res) {
        GuestsFaker.prototype.generateSchema();
        GuestsFaker.prototype.printSchema().then(function (result) {
            let limit = parseInt(req.query.limit || result.length);
            let offset = parseInt(req.query.offset || 0);
            return result.slice(offset, limit + offset);
        }, function (err) {
            console.log(err);
        }).then(res.send.bind(res));
    }
}

module.exports = GuestsController;
