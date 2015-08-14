// Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

// Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.

var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){

  //parse the URL and query string using the Node core 'url' module
  var parsedUrl = url.parse(request.url, true);
  var path = parsedUrl.pathname.toLowerCase();
  var query = parsedUrl.query;

  //if path is parsetime get object with keys hour, minute, second
  if (path === '/api/parsetime') {

    var requestDate = new Date(query.iso);
    var result = {};
    result.hour = requestDate.getHours();
    result.minute = requestDate.getMinutes();
    result.second = requestDate.getSeconds();

    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(result));

  //else if path is unixtime, get unix epoch time in milliseconds
  } else if (path === '/api/unixtime') {

    var unixtime = Date.parse(query.iso);
    var result = {
      unixtime: unixtime
    };
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(result));
  };

});


//Your server should listen on the port provided by the first argument to your program.
server.listen(process.argv[2], function(){
  console.log("server is running on port " + process.argv[2]);
})
