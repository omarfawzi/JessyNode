var Controller = require('./Controller');
var FakerFactory = require('../factories/FakerFactory');

class VideosController extends Controller {

    constructor(){
       super();
       this.faker = 'Videos';
    }

    getFakeData(req,res){
        FakerFactory.prototype.getFaker(this.faker).prototype.generateSchema();
        FakerFactory.prototype.getFaker(this.faker).prototype.printSchema().then(result => {
            result = this.parseLinks(result);
            let limit = parseInt(req.query.limit || result.length);
            let offset = parseInt(req.query.offset || 0);
            return Array.isArray(result) ? result.slice(offset, limit + offset) : result ;
        }, function (err) {
            console.log(err);
        }).then(res.send.bind(res));
    }

    parseLinks(results){
        let hold = 1;
        let constVid = 'https://www.youtube.com/embed/';
        let newRes = [];
        for (let i = 0 ; i < results[0].length ; i++,hold++){
            results[0][i].link = constVid + results[hold];
            newRes.push(results[0][i]);
        }
        return newRes;
    }
}

module.exports = VideosController;