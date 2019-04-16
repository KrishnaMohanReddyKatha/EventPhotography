var express = require('express');
var router = express.Router();

/* GET home page. */
console.log('in js');
router.get('/', function(req, res, next) {
  res.sendfile('./views/index.html');
});

module.exports = router;
