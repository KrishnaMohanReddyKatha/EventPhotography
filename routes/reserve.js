var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/EventPhotography');

router.get('/', function(req, res) {
	var photographerId = req.query.photographerId;
	var date = req.query.date; 
	console.log(date);
    var collection = db.get('Phtographers');

    collection.update({'id':photographerId},{$push : {"reservedDates" : date}
	 	
	 	}, function(err, photographer){
    	    	if (err) throw err;
    	    	console.log('successfully reserved');
        	});
    /*
    collection.findOne({'id':photographerId}, function(err, photographer){
        if (err) throw err;
        photographer.reservedDates.push(date);
        /*
		collection.update({'id':photographerId},{'id':photographer.id,'fname':photographer.fname, 'lname':photographer.lname, 
	    										 'email' : photographer.email,'mobile' : photographer.email, 'reservedDates':photographer.reservedDates,
	    										 'userRating' :  photographer.userRating, 'specializedEvents' :photographer.specializedEvents 
	     
	 	
	 	*/

       /* collection.update(
      {
        "query": { "_id": photographer._id },
        "update": { "$set": { 
            "reservedDates" : photographer.reservedDates
        }},
        "options": { "new": true, "upsert": true }
      },
      function(err,doc) {
        if (err) throw err;
        console.log( doc );
      }
);
    });
    */
    res.redirect('/');
});

module.exports = router;