// Load the sys module for console writing
var sys = require('sys');

// Load the net module to create a tcp server
var net = require('net');

// Set up a tcp server
var server = net.createServer(function(socket) {
  // Every connection, say hello and close
  socket.addListener("connect", function() {
	sys.puts("Connection from " + socket.remoteAddress);
        socket.write("Hello World from Node via tcp\n");
        socket.end();
  });
 
});

// Fire up a server bound to port 7000 on localhost
server.listen(7000, "localhost");

// Put a friendly message on the terminal
sys.puts("TCP server listening on port 7000 at localhost");
