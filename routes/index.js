var express = require('express');
var router = express.Router();

/* GET home page. */
console.log('in js');
router.get('/', function(req, res, next) {
  console.log(req.session +"index.js");
  sess=req.session;
  res.sendfile('./views/index.html');
});

router.get('/services', function(req, res, next) {
  res.sendfile('./views/services.html');
});

router.get('/login', function(req, res, next) {
  res.sendfile('./views/login.html');
});

router.get('/logout', function(req, res, next) {
  res.sendfile('./views/login.html');
});

router.get('/order', function(req, res, next) {
  res.sendfile('./views/orders.html');
});

router.get('/booknow', function(req, res, next) {
  res.sendfile('./views/booknow.html');
});

router.get('/gallery', function(req, res, next) {
  res.sendfile('./views/gallery.html');
});

router.get('/signup', function(req, res, next) {
  res.sendfile('./views/signup.html');
});

module.exports = router;
