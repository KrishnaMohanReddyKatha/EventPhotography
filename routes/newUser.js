var express = require('express');
var router = express.Router();
var monk = require('monk');
var bcrypt = require('bcryptjs');
var db = monk('localhost:27017/EventPhotography');

router.post('/', function(req, res, next) {
	var collection = db.get('userLoginInfo');
	var pwd = req.body.pwd;

                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(pwd, salt, function (err, hash) {
                        if (err)
                            console.log(err);

						pwd = hash;
						console.log(pwd);
						console.log(req.body.email);
                     	collection.insert({'fname':req.body.fname, 'lname':req.body.lname, 'email':req.body.email, 'password':pwd,'isAdmin':'false'}, function(err, response){
						if (err) throw err;
						console.log("success");
							  res.render('registrationSuccess.html');
						console.log("done");
								});
                    		});
                		});



	/*
  	var db = monk('localhost:27017/EventPhotography');
	var collection = db.get('userLoginInfo');
	collection.find({}, function(err, data){
        if (err) throw err;
      	console.log(data);
 });*/	
});







module.exports = router;