/**
 * Created by qoder on 16/10/18.
 */
require('./setup');
var path = require('path');
var express = require('express');
var ejs=require('ejs');
var favicon = require('serve-favicon');
var serverRender = require('./dist/server.js');
var app = express();
var isDev = process.env.NODE_ENV === 'development';
var defaultPort = isDev ? 3000 : 8200;
var port = process.env.PORT || defaultPort;

app.use(express.static(path.join(__dirname, 'dist')));

if (isDev) {
  var config = require('./cfg/defaults');
  var compiler = require('webpack')(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    hot: true,
    inline: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler))
} else {
  app.use(favicon(path.join(__dirname, 'dist/views', 'favicon.ico')));
  app.set('views', path.join(__dirname, 'dist/views'));
  app.set('view engine', 'html');
  app.engine('.html', ejs.__express);
}

app.get('*', function (req, res, next) {
  serverRender.default(req, res);
});

app.listen(port, function (err) {
  if (err) {
    console.error(err)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
