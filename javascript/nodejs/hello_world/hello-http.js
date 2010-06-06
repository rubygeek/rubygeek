// Load the sys module for console writing
var sys = require('sys');

// Load the http module to write an http server
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Context-Type" : "text/plain"});
  response.write("Hello World from Node");
  response.end();
});

// Listen on port 8000, IP efaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on teh terminal
sys.puts("Server running at http://127.0.0.1:8000");
