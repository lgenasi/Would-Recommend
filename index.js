var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var pkg = require('./package');
var route = pkg.route;
var port = pkg.port;
var dataFile = pkg.dataFile;

var exec = require('child_process').exec;
var WebSocketServer = require('ws').Server;

var clients = [];

var app = express();
var server = http.createServer(app);
app.use(cookieParser());
app.use(expressSession({secret:'glossary-da-best'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.set('port', (port));
app.get(route, function (req, res) {
  res.render('main', {title: pkg.name, debug: pkg.debug});
});

var wss = new WebSocketServer({server: server});
wss.broadcast = function(data, ws) {
  for (var i in this.clients) {
    if (this.clients[i] !== ws) {
      this.clients[i].send(data);
    }
  }
};