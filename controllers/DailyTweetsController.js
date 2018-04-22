var Controller = require('./Controller');

class DailyTweetsController extends Controller {

    constructor() {
        super();
        this.faker = 'DailyTweets';
    }

}

module.exports = DailyTweetsController;