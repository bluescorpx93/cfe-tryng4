var http = require('http');
var fs = require("fs");

var serveHTML = function(req, res){
  fs.readFile("dist/index.html", function(err, data){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    res.end();
  })
}

http.createServer(serveHTML).listen(3000, () => console.log("Node HTTP Server Listening on 3000"));