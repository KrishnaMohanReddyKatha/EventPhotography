var sess;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var services = require('./routes/services');
var galleryRouter = require('./routes/galleryApi');
var photographerRouter = require('./routes/photographerApi');
var orderRouter = require('./routes/orderApi');
var newUser = require('./routes/newUser');
var userLogin = require('./routes/userLogin');
var session = require('express-session');
var availablePhotographers = require('./routes/getAvailablePhotographers');
var reservePhotographer = require('./routes/reserve');
var bodyParser = require('body-parser'); 
var fileUpload = require('express-fileupload');
//var sess;
var session = require('express-session');
var app = express();
app.locals.email = "";
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(logger('dev'));
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
console.log('in app.js');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/photographers',photographerRouter);
app.use('/api/services',services);
app.use('/api/gallery',galleryRouter);
app.use('/api/orders',orderRouter);
app.use('/registerNewUser', newUser);
app.use('/loginUser', userLogin);
app.use('/getAvailablePhotographers', availablePhotographers);
app.use('/reserve',reservePhotographer);
app.post('/checkUsername', function(req, res) {
  var monk = require('monk');
  var db = monk('localhost:27017/EventPhotography');
  var collection = db.get('userLoginInfo');
  console.log(req.body.username);
  collection.find({}, function(err, data){
      if(err)
        throw err;
        console.log(data);
      var users = [];
      for(i in data) {
        users.push(data[i].email);
      }
      res.send({'users':users});
  });
});
app.get('/api/logout',function(req, res){
  req.app.locals.email="";
  res.clearCookie('user');
  res.clearCookie('isadmin');
  res.clearCookie('fname');
  res.send('cookie foo cleared');
}); 
//app.locals.userdetails = sess;
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
