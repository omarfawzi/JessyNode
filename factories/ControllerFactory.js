var BannerController = require('../Controllers/BannerController');
var BiographyController = require('../Controllers/BiographyController');
var DailyTweetsController = require('../Controllers/DailyTweetsController');
var GalleryController = require('../Controllers/GalleryController');
var GuestsController = require('../Controllers/GuestsController');
var TestimonialsController = require('../Controllers/TestimonialsController');
var VideosController = require('../Controllers/VideosController');
var SubscribeController = require('../Controllers/SubscribeController');

class ControllerFactory {

    constructor() {

    }

     getController(controller){
        switch (controller) {
            case 'Banner':
                return new BannerController();
            case 'Biography':
                return new BiographyController();
            case 'DailyTweets':
                return new DailyTweetsController();
            case 'Gallery':
                return new GalleryController();
            case 'Guests':
                return new GuestsController();
            case 'Testimonials':
                return new TestimonialsController();
            case 'Videos':
                return new VideosController();
            case 'Subscribe':
                return new SubscribeController();
            default:
                return null;
        }
    }

}

module.exports = ControllerFactory;
