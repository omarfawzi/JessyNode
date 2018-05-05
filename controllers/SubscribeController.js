var Controller = require('./Controller');
const fs = require('fs');

class SubscribeController extends Controller {

    constructor() {
        super();
    }

    subscribe(req, res) {

        fs.readFile('subscription.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                res.send({success: false, message: 'cant read file'});
            } else {
                let obj = JSON.parse(data); //now it an object
                fs.truncate('subscription.json');
                if (Object.getPrototypeOf( obj ) === Object.prototype)
                    obj = [];
                obj.push({email: req.body.email}); //add some data
                let json = JSON.stringify(obj);
                fs.writeFile('subscription.json', json, 'utf8', function (err) {
                    if (err)
                        res.send({success: false, message: 'cant write to file'});
                    else
                        res.send({success: true, message: 'successfully done'});
                });
            }
        });
    }

}

module.exports = SubscribeController;
