// from nodejs.org website
var http = require('http');

var handler = function (req, res) {
  console.log('you want to go to: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url == '/') {
    res.end('Hello World\n');
  } else if (req.url == '/bye') {
    res.end('Goodbye World\n');
  } else {
    res.end('Whatcho talking about willis?!\n');
  }
}
var server = http.createServer(handler);

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');



