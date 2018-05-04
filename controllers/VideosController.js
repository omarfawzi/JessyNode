var Controller = require('./Controller');
var FakerFactory = require('../factories/FakerFactory');

class VideosController extends Controller {

    constructor(){
       super();
       this.faker = 'Videos';
    }

    getFakeData(req,res){
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
        let constVid = 'https://www.youtube.com/embed/';
        let newRes = [];
        for (let i = 0 ; i < results.length ; i++){
            let obj = {} ;
            obj.id = results[i].id.videoId;
            obj.title = results[i].snippet.title;
            obj.preview = results[i].snippet.thumbnails.default.url;
            obj.link = constVid + obj.id;
            obj.duration = Math.floor(Math.random() * Math.floor(10));
            newRes.push(obj);
        }
        return newRes;
    }
}

module.exports = VideosController;