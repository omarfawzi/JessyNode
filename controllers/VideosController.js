var VideosFaker = require('../fakers/VideosFaker');

class VideosController {
    constructor(){
    }

    getFakeVideos(req,res){
        VideosFaker.prototype.generateSchema();
        VideosFaker.prototype.printSchema(req,res);
    }
}

module.exports = VideosController;