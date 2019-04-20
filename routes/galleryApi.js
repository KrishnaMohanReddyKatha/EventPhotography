var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/EventPhotography');

router.get('/', function(req, res) {
    var collection = db.get('gallery');
    collection.find({}, function(err, videos){
        if (err) throw err;
      	res.json(videos);
    });
});

router.get('/:service', function(req, res) {
    var collection = db.get('gallery');
    collection.find({service : {'$regex':req.params.service, '$options':'i' }}, function(err, video){
        if (err) throw err;
       res.json(video);
});
});
module.exports = router;