var webpack = require('webpack');
var webPackDevMiddleWare = require('webpack-dev-middleware');
var config = require('./webpack.config');
var express = require('express');
var path = require('path');

var app = new express();
var port = 3000;

app.use(express.static(path.join(__dirname, 'semantic')));

var compiler = webpack(config);
app.use(webPackDevMiddleWare(compiler, { noInfo: true, publicPath: config.output.publicPath }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("Listening on port " + port);
  }
});
