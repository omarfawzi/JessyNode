var Controller = require('./Controller');

class BiographyController extends Controller {

    constructor(){
        super();
        this.faker = 'Biography';
    }

}

module.exports = BiographyController;