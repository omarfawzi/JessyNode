var BannerFaker = require('../fakers/BannerFaker');

class BannerController {
    constructor(){
    }

    getFakeBanner(req,res){
        BannerFaker.prototype.generateSchema();
        BannerFaker.prototype.printSchema().then(res.send.bind(res)).catch(console.error);
    }
}

module.exports = BannerController;
