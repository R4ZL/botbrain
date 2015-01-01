'use strict';

// Initializers
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

var port = process.env.PORT || 3000;

// Setup and launch server
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

http.listen(port, function(){
  console.log('listening on port: ' + port);
});
