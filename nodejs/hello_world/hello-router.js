// Load the node-router library by crewationix
var server = require('node-router').getServer();

// Configure our HTTP server to response with Hello World to tun
server.get("/", function( request, response) {
  response.simpleText(200, "Hello World!");
});

server.get("/bye", function( request, response) {
  response.simpleText(200, "Good Bye!");
});

// Listen on port 8000
server.listen(8000, "localhost");
