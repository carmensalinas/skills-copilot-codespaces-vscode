// Create a web server that listens on port 8080
// When you navigate to http://localhost:8080/comments, it should return a list of comments in JSON format
// The comments should be stored in a file called comments.json
// The file should contain an array of objects

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  fs.readFile('comments.json', function(err, data) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(data);
  });
});

// Listen on port 8080, IP defaults to