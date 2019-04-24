var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log("hello :");
  //if(req.app.locals.email === "") {
    //    console.log("session intialized"+sess);
    //    sess=req.session;
 // }
  res.sendfile('./views/index.html');
});

router.get('/services', function(req, res, next) {
  res.sendfile('./views/services.html');
});

router.get('/login', function(req, res, next) {
  res.sendfile('./views/login.html');
});

router.get('/logout', function(req, res, next) {
  sess.email = null;
  res.sendfile('./views/login.html');
});

router.get('/gallery', function(req, res, next) {
  res.sendfile('./views/gallery.html');
});

router.get('/signup', function(req, res, next) {
  res.sendfile('./views/signup.html');
});

router.get('/cancelOrder', function(req, res, next) {
  res.sendfile('./views/cancel-order.html');
});

router.get('/admin', function(req, res, next) {
  res.sendfile('./views/admin.html');
});

router.get('/addService', function(req, res, next) {
  res.sendfile('./views/add-service.html');
});

router.get('/editService', function(req, res, next) {
  res.sendfile('./views/add-service.html');
});


router.get('/addPhotographer', function(req, res, next) {
  res.sendfile('./views/add-photographer.html');
});

router.get('/editPhotographer', function(req, res, next) {
  res.sendfile('./views/add-photographer.html');
});

router.get('/booknow', function(req, res, next) {
  console.log(req.app.locals.email);
  if(req.app.locals.email) {
    res.sendfile('./views/booknow.html');
  } else {
    res.sendfile('./views/login.html');
  }
});

router.get('/order', function(req, res, next) {
  res.sendfile('./views/orders.html');
  // if(sess.email) {
  //   res.sendfile('./views/orders.html');
  // } else {
  //   res.sendfile('./views/login.html');
  // }
});

module.exports = router;
