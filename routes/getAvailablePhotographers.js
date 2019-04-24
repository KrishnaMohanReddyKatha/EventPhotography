var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/EventPhotography');

router.get('/', function(req, res) {
    var collection = db.get('Phtographers');
    collection.find({}, function(err, photographers){
        if (err) throw err;
         result = {};
         for(i in photographers) {
         	if(photographers[i].reservedDates.includes(req.query.date) || !photographers[i].specializedEvents.includes(req.query.eventType)) {
         		delete photographers[i];
         	}
         }
      	res.json(photographers);
    });
});

module.exports = router;