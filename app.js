const createError = require('http-errors');
const express = require('express');
const Session = require('express-session')
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const cookies = require('cookie-parser');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"))
app.use(Session({
  secret: 'shh',
  resave: false,
  saveUninitialized: false,
}));
app.use(cookies());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userLoggedMiddleware);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');



app.use('/', indexRouter);
app.use('/users', usersRouter);
// la linea de app.use(products) la agregue yo
app.use('/products', productsRouter)

//  catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
//