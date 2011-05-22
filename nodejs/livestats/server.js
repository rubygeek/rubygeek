require.paths.unshift(__dirname + "/vendor"); //add vendor to beginning of path

// module are assigned a local variable in application
// using commonjs
// http is one of the built in objects
// assigning to local variable reduces clutter in global scope
var http = require('http'),
    sys  = require('sys'),
    nodeStatic = require('node-static/lib/node-static');

var server = http.createServer(function(request, response) {
	var file = new nodeStatic.Server('./public');
	//, { 
	//	cache: false
	//	});
	
	request.addListener('end', function() {
		file.serve(request, response);
	}); // client is done and ready to do something
})
server.listen(8000);

