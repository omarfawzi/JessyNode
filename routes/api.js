var router = require('express')();
require('express-reverse')(router);

var BiographyController = require('../controllers/BiographyController');
var VideosController = require('../controllers/VideosController');

router.get('biography_api','/biography/get',BiographyController.prototype.getFakeBiography) ;
router.get('videos_api','/videos/get',VideosController.prototype.getFakeVideos) ;

module.exports = router;
