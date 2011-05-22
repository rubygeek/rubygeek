require.paths.unshift(__dirname + "/vendor"); //add vendor to beginning of path
var nodeStatic = require('node-static/lib/node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new(nodeStatic.Server)('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    });
}).listen(8080);
