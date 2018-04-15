var express = require('express');
var router = express.Router();
var BiographyController = require('../controllers/BiographyController');
var VideosController = require('../controllers/VideosController');

router.get('/biography/get',BiographyController.prototype.getFakeBiography) ;
router.get('/videos/get',VideosController.prototype.getFakeVideos) ;

module.exports = router;
