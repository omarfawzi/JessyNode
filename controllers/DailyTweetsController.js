var DailyTweetsFaker = require('../fakers/DailyTweetsFaker');

class DailyTweetsController {

    constructor() {
    }

    getFakeTweets(req, res) {
        DailyTweetsFaker.prototype.generateSchema();
        DailyTweetsFaker.prototype.printSchema().then(function (result) {
            let limit = parseInt(req.query.limit || result.length);
            let offset = parseInt(req.query.offset || 0);
            return result.slice(offset, limit + offset);
        }, function (err) {
            console.log(err);
        }).then(res.send.bind(res));
    }

};

module.exports = DailyTweetsController;