var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/EventPhotography');

router.get('/', function(req, res) {
    var collection = db.get('orders');
    var search1 = req.query.photographer;
    var genre1 = req.query.myserice;
    console.log(req.query.myserice);
    var searchCriteria = {};
    if (search1 && genre1) {
        searchCriteria = {photographer : {'$regex':search1, '$options':'i' },service:genre1};
    }
    else if (search1){
        searchCriteria = {photographer : {'$regex':search1, '$options':'i' }};
    }
    else if(genre1){
        searchCriteria ={service:genre1};
    }
    collection.find(searchCriteria, function(err, videos){
        if (err) throw err;
        res.json(videos);
    });
});


// router.get('/:id', function(req, res) {
//     var collection = db.get('orders');
//     collection.find({user_id : req.params.id}, function(err, orders){
//         if (err) throw err;
//        res.json(orders);
// });
// });


router.get('/:id', function(req, res) {
    var collection = db.get('orders');
    var search1 = req.query.photographer;
    var genre1 = req.query.myserice;
    console.log(req.query.myserice);
    var searchCriteria = {};
    if (search1 && genre1) {
        searchCriteria = {photographer : {'$regex':search1, '$options':'i' },service:genre1};
    }
    else if (search1){
        searchCriteria = {photographer : {'$regex':search1, '$options':'i' }};
    }
    else if(genre1){
        searchCriteria ={service:genre1};
    }
    collection.find(searchCriteria, function(err, videos){
        if (err) throw err;
        res.json(videos);
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