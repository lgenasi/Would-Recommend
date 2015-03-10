var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var pkg = require('./package');
var route = pkg.route;
var port = pkg.port;
var dataFile = pkg.dataFile;

var exec = require('child_process').exec;

var app = express();
app.use("/src", express.static(__dirname + '/src'));
app.use("/lib", express.static(__dirname + '/lib'));
var server = http.createServer(app);

app.set('port', (port));
app.get(route, function (req, res) {
  res.sendfile('test.html');
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});