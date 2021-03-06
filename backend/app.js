'use strict';

var logger          = require('morgan'),
  cors            = require('cors'),
  http            = require('http'),
  express         = require('express'),
  errorhandler    = require('errorhandler'),
  dotenv          = require('dotenv'),
  bodyParser      = require('body-parser'),
  router = require('./frontRouter');

var app = express();

dotenv.load();

// Parsers
// old version of line
// app.use(bodyParser.urlencoded());
// new version of line
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

app.use(express.static(__dirname + '/uploads'));
app.use('/config', express.static(__dirname + '/config/publish'));
app.use('/tests/images', express.static(__dirname + '/tests/images'));

app.options("*", cors());
app.use(cors({
  "origin": "*",
  "allowedHeaders": 'X-Requested-With, Content-Type, Last-modified, Content-Language, Cache-Control, Expires, Pragma, Content-Range, Content-Disposition, Content-Description, Accept, Authorization',
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  "credentials": true,
  "preflightContinue": true
}));    // 왜 안먹는거지?

// catch 404 and forward to error handler
// app.use(function(err, req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// You can explicitly set the path, using the environmental variable APP_ROOT_PATH or by calling
require('app-root-path').setPath(__dirname);

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

if (process.env.NODE_ENV === 'development') {
  app.use(express.logger('dev'));
  app.use(errorhandler())
}

// Import routes to be served
router(app);

module.exports = app;
