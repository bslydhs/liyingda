var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');//日志
var settings = require('./settings');
var session = require('express-session');//服务端的缓存
var flash = require('connect-flash');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var homePageRouter = require('./routes/homePage');
var classifyRouter = require('./routes/classify');
var searchRouter =  require('./routes/search');
var detailsRouter = require('./routes/details');
var myselfRouter = require('./routes/myself');
var findRouter = require('./routes/find');
var shoppingRouter = require('./routes/shopping');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//配置session
app.use(session({
    secret: settings.cookieSecret, //加密
    key: settings.db, //cookie nam
    cookie: {maxAge: 60000},
    resave: false,
    saveUninitialized: true,
}));
app.use(flash());//引用flash
//配置flash
app.use(function (req, res, next) {
    res.locals.errors = req.flash('error');
    res.locals.infos = req.flash('info');
    next();
});



app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/homePage',homePageRouter);
app.use('/classify',classifyRouter);
app.use('/search',searchRouter);
app.use('/details',detailsRouter);
app.use('/myself',myselfRouter);
app.use('/find',findRouter);
app.use('/shopping',shoppingRouter);
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
