var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/EventPhotography');

router.get('/', function(req, res) {
    var collection = db.get('Phtographers');
    collection.find({}, function(err, orders){
        if (err) throw err;
      	res.json(orders);
    });
});

router.get('/:id', function(req, res) {
    var collection = db.get('Phtographers');
    collection.find({_id : req.params.id}, function(err, orders){
        if (err) throw err;
      	res.json(orders);
    });
});



router.post('/', function(req, res) {
    var collection = db.get('Phtographers');
    collection.insert({
        "fname":req.body.fname ,
        "lname":req.body.lname,
        "id": req.body.id ,
        "email":req.body.email,
        "reservedDates":[],
        "specializedEvents":req.body.specializedEvents,
        "userrating": req.body.userrating,
        "status":'active'
    }, 
    function(err, response){
        if (err) throw err;
      	res.send(200);
    });
});

router.post('/:id', function(req, res) {
    var collection = db.get('Phtographers');
    collection.update({
        _id: req.params.id
    },{$set:{
        "fname":req.body.fname ,
        "lname":req.body.lname,
        "id": req.body.id ,
        "email":req.body.email,
        "reservedDates":[],
        "specializedEvents":req.body.specializedEvents,
        "userrating": req.body.userrating,
        "status":'active'
    }
    },function(err, orders){
        if (err) throw err;
        res.send(200);
});
});

module.exports = router;