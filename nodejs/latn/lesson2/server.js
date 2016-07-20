var http = require('http')
  , handler = function(req, res) {
      res.writeHead(200, {'Content-type' : 'text/plain'})
      res.end('Hello There Node')
    }
  , server = http.createServer(handler)

server.listen(1337)  // starts server to listen on a part

console.log('Server running at http://127.0.0.1:1337')
