var router = require('express')();
require('express-reverse')(router);

var BiographyController = require('../controllers/BiographyController');
var VideosController = require('../controllers/VideosController');
var GuestsController = require('../controllers/GuestsController');
var BannerController = require('../controllers/BannerController');

router.get('biography_api','/biography/get',BiographyController.prototype.getFakeBiography) ;
router.get('videos_api','/videos/get',VideosController.prototype.getFakeVideos) ;
router.get('guests_api','/guests/get',GuestsController.prototype.getFakeGuests) ;
router.get('banner_api','/banner/get',BannerController.prototype.getFakeBanner) ;

module.exports = router;
