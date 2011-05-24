require.paths.unshift(__dirname + "/vendor"); //add vendor to beginning of path

var http = require('http'),
    sys  = require('sys'),
    nodeStatic = require('node-static/lib/node-static');

function LiveStats(options) {
  // if this is called without the new operator it will call new
  // code from John Resig
  if (! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  
  var self = this;
  
  self.settings = {
    port: options.port,
    geoipServer: {
      hostname: options.geoipServer.hostname
      , port: options.geoipServer.port || 80
    }
  };
  
  self.init();

};

LiveStats.prototype.init = function() {
  var self = this;
  self.httpServer = self.createHttpServer();
  self.httpServer.listen(self.settings.port);
  sys.log('Server started on port: '+ self.settings.port);
}

LiveStats.prototype.createHttpServer = function() {
  var self = this;
  var server = http.createServer(function(request, response) {
  	var file = new nodeStatic.Server('./public', { 
      cache: false
  	});

  	request.addListener('end', function() {
 
  		if (request.url == '/config.json' && request.method == 'GET') {
  		  response.writeHead(200, {
  		    'Content-Type' : 'application/x-javascript'
  		  });
  		  var jsonString = JSON.stringify({
  		    port: self.settings.port
  		  });
  		  response.write(jsonString)
  		} else {
  		  file.serve(request, response);
  		}
  	});
  });
  return server;
}

// uses commonjs system for building modules
module.exports = LiveStats;