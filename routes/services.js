var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/EventPhotography');

router.get('/', function(req, res) {
    var collection = db.get('Services');
    collection.find({}, function(err, videos){
        if (err) throw err;
      	res.json(videos);
    });
});

router.get('/:id', function(req, res) {
    var collection = db.get('Services');
    collection.find({_id : req.params.id}, function(err, videos){
        if (err) throw err;
      	res.json(videos);
    });
});

// router.post('/', function(req, res) {
//     var collection = db.get('Services');
//     collection.find({}, function(err, videos){
//         if (err) throw err;
//       	res.json(videos);
//     });
// });

router.post('/', function(req, res) {
    console.log("entering here ");
    var collection = db.get('Services');
    console.log("data"+req.body.servicename);
    collection.insert({"servicename":req.body.servicename, "status":"active","description":req.body.description}, function(err, response){
        if (err) throw err;
      	res.send(200);
    });
});

router.post('/:id', function(req, res) {
    var collection = db.get('Services');
    collection.update({
        _id: req.params.id
    },{$set:{
        "servicename":req.body.servicename,
        "description":req.body.description
    }
    },function(err, orders){
        if (err) throw err;
        res.send(200);
});
});


module.exports = router;