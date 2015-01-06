'use strict';

// Initializers
var express = require('express');
var app = express();
var http = require('http').Server(app);
var shell = require('shelljs');

var port = process.env.PORT || 3000;

app.post('/send_command', function(req, res){
  shell.echo(req.query);
  res.send('success');
});

http.listen(port, function() {
  console.log('listening on port: ' + port);
  shell.echo('hello world');
});

var runSystemJobs = function() {
  console.log("Running System Jobs")
}

var runUserJobs = function() {
  console.log("Running User Jobs")
  setTimeout(runUserJobs, 1000);
}

// System Tasks
setInterval(runSystemJobs, 1000);

// User
setTimeout(runUserJobs, 1000);
