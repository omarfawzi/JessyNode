var BannerFaker = require('../fakers/BannerFaker');
var BiographyFaker = require('../fakers/BiographyFaker');
var DailyTweetsFaker = require('../fakers/DailyTweetsFaker');
var GalleryFaker = require('../fakers/GalleryFaker');
var GuestsFaker = require('../fakers/GuestsFaker');
var TestimonialsFaker = require('../fakers/TestimonialsFaker');
var VideosFaker = require('../fakers/VideosFaker');

class FakerFactory {

    constructor() {

    }

    getFaker(faker){
        switch (faker) {
            case 'Banner':
                return BannerFaker;
            case 'Biography':
                return BiographyFaker;
            case 'DailyTweets':
                return DailyTweetsFaker;
            case 'Gallery':
                return GalleryFaker;
            case 'Guests':
                return GuestsFaker;
            case 'Testimonials':
                return TestimonialsFaker;
            case 'Videos':
                return VideosFaker;
            default:
                break;
        }
    }

}

module.exports = FakerFactory;
