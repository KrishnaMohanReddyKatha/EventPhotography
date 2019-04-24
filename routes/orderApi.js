var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/EventPhotography');

router.get('/', function(req, res) {
    var collection = db.get('orders');
    collection.find({}, function(err, orders){
        if (err) throw err;
      	res.json(orders);
    });
});

router.get('/:id', function(req, res) {
    var collection = db.get('orders');
    collection.find({user_id : req.params.id}, function(err, orders){
        if (err) throw err;
       res.json(orders);
});
});

router.post('/:id',function(req,res){
    var collection = db.get('orders');
    collection.update({
        _id: req.params.id
    },{$set:{
    'status':'Cancel'
    }
    },function(err, orders){
        if (err) throw err;
        res.send(200);
});
});


module.exports = router;