var express = require('express');
var router = express.Router();
var BiographyController = require('../controllers/BiographyController');

router.get('/biography/get',BiographyController.prototype.getFakeBiography) ;

module.exports = router;
