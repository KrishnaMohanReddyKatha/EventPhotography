var express = require('express');
var router = express.Router();
var monk = require('monk');
var bcrypt = require('bcryptjs');

var db = monk('localhost:27017/EventPhotography');

router.post('/', function(req, res, next) {

	/*
	passport.authenticate('local', {
        successRedirect: 'public/views/registrationSuccess.html'//,
        /*failureRedirect: '/users/login',
        //failureFlash: true
    })(req, res, next);
    */
	var collection = db.get('userLoginInfo');
	console.log(req.body);
	collection.findOne({'email':req.body.email}, function(err, data){
        if (err) throw err;
        console.log(data);

        pwd = req.body.pwd;
        bcrypt.compare(pwd, data.password, function (err, isMatch) {
        if (err)
            console.log(err);

        if (isMatch) {
            sess.email=req.body.email;
            console.log(sess);
            console.log('true');
            console.log(data.fname);
            console.log(data._id);
            var myid = data._id;
            res.cookie('isadmin',data.isadmin);
            res.cookie('user',"5cba1be845e10403f73928e4");
            res.cookie('fname',data.fname) ;
            res.render('welcome.html',{'result':data.fname});
	      	console.log('true');
        } else {
            console.log('false');
	    	res.json({'result':'false'});
	    	console.log('false');
        }
    });




        
 }); 
});


module.exports = router;