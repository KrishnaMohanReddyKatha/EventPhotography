var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/EventPhotography');
var path = require('path');
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
    console.log("in server");   
    console.log(req.body);
    var image = req.files.picture;
    console.log(image);
    var name = typeof req.files.picture !== "undefined" ? req.files.picture.name:"";
     console.log(image.name);
     var mypath = name;
     console.log(mypath);
     if(name != "")
     {
        image.mv('public/images/photographers/'+req.body.id+'.jpg',function(err){    
            console.log("error in moving");
            return console.log(err); 
        });
     }
     
    var collection = db.get('Phtographers');
    var specializedEvents = [];
    var reservedDates = [];
    if(req.body.specializedEvents!="") {
        console.log("splitted");
        specializedEvents = req.body.specializedEvents.split(",");
    }
    if(req.body.reservedDates!="") {
        console.log("splitted dates");
        reservedDates = req.body.reserveDates.split(",");
    }
    var insert = true;
    collection.findOne({"id":req.body.id}, function(err, data){
        if(data) {
            insert = false;
        }
    });

    if(!insert) {
    collection.insert({
        "fname":req.body.fname ,
        "lname":req.body.lname,
        "id": req.body.id ,
        "email":req.body.email,
        "reservedDates":reservedDates,
        "specializedEvents":specializedEvents,
        "userrating": req.body.userrating,
        "status":'active'
    },function(err, orders){
        if (err) throw err;
        res.send(200);
        });
    } else {
        collection.update({
            _id: req.params.id
        },{$set:{
            "fname":req.body.fname ,
            "lname":req.body.lname,
            "id": req.body.id ,
            "email":req.body.email,
            "reservedDates":reservedDates,
            "specializedEvents":specializedEvents,
            "userrating": req.body.userrating,
            "status":'active'
        }
        },function(err, orders){
            if (err) throw err;
            res.redirect('/admin');
            });
    }

});

router.post('/:id', function(req, res) {
    var collection = db.get('Phtographers');
    // var image = req.body.pic;
    // console.log(image.name);
    // image.mv(path,function(err){
    //     return console.log(err); 
    // });

    var specializedEvents = [];
    var reservedDates = [];
    if(req.body.specializedEvents!="") {
        console.log("splitted");
        specializedEvents = req.body.specializedEvents.split(",");
    }
    if(req.body.reservedDates!="") {
        console.log("splitted dates");
        reservedDates = req.body.reservedDates.split(",");
    }
    collection.update({
        _id: req.params.id
    },{$set:{
        "fname":req.body.fname ,
        "lname":req.body.lname,
        "id": req.body.id ,
        "email":req.body.email,
        "reservedDates":reservedDates,
        "specializedEvents":specializedEvents,
        "userrating": req.body.userrating,
        "status":'active'
    }
    },function(err, orders){
        if (err) throw err;
        res.send(200);
});
});

module.exports = router;