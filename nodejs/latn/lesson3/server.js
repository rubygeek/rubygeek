
var http = require('http')
  , handler = function(req, res) {
      console.log(req.url)
      if (req.url === '/') {
        res.writeHead(200, {'Content-type' : 'text/plain'})
        res.end('Hello There Node')
      } else if (req.url === '/marketing') {
        if (req.method === 'GET') {
          res.writeHead(200, {'Content-type' : 'text/html'})
          res.end('<h2>Buy all the products</h2>')
        } else if (req.method === 'POST') {
          res.writeHead(200, {'Content-type' : 'text/html'})
          res.end('<form action=')
        }
      } else {
        res.writeHead(404, {'Content-type' : 'text/plain'})
        res.end('Page not found')
      }
    }
  , server = http.createServer(handler)

server.listen(1337)  // starts server to listen on a part

console.log('Server running at http://127.0.0.1:1337')
