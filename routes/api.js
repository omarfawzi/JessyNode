var router = require('express')();
require('express-reverse')(router);
var ControllerFactory = require('../factories/ControllerFactory');

router.get('biography_api','/biography/get',(req,res) => {
    new ControllerFactory().getController('Biography').getFakeData(req,res);
}) ;

router.get('videos_api','/videos/get',(req,res) => {
    new ControllerFactory().getController('Videos').getFakeData(req,res);
}) ;

router.get('guests_api','/guests/get',(req,res) => {
    new ControllerFactory().getController('Guests').getFakeData(req,res);
}) ;

router.get('banner_api','/banner/get',(req,res) => {
    new ControllerFactory().getController('Banner').getFakeData(req,res);
}) ;

router.get('daily_tweets_api','/dailyTweets/get',(req,res) => {
    new ControllerFactory().getController('DailyTweets').getFakeData(req,res);
}) ;

router.get('testimonials_api','/testimonials/get',(req,res) => {
    new ControllerFactory().getController('Testimonials').getFakeData(req,res);
}) ;

router.get('gallery_api','/gallery/get',(req,res) => {
    new ControllerFactory().getController('Gallery').getFakeData(req,res);
}) ;

router.post('subscribe_api','/subscribe/post',new ControllerFactory().getController('Subscribe').subscribe);

module.exports = router;
