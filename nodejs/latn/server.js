var express = require('express');
var app = express();
var port = process.env['PORT'] || 3000;

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send('<html><head><title>NodeSlash</title></head><body><h1>NodeSlash</h1></body></html>');
});



app.listen(port);

console.log('Server running at http://127.0.0.1:' + port + '/');


