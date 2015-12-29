var express = require('express');
var path = require('path');
var webpack = require('webpack');
var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');

app.use(express.static(static_path))
  .use(express.static(path.join(__dirname, 'semantic/dist')))
  .get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  }).listen(process.env.PORT || 8080, function (err) {
    if (err) { console.error(err); }
    console.log('Listening at localhost:8080');
  });

if (isDevelopment) {
  var config = require('./webpack.config');
  var webPackDevMiddleWare = require('webpack-dev-middleware');
  var devServer = express();

  devServer.use(express.static(path.join(__dirname, 'semantic/dist')));
  var compiler = webpack(config);
  devServer.use(webPackDevMiddleWare(compiler, { noInfo: true, publicPath: config.output.publicPath }));

  devServer.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

  devServer.listen(3000, 'localhost', function (err, result) {
    if (err) { console.error(err); }
    console.log('Listening at localhost:3000');
  });
}
