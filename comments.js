// Create a web server that listens on port 8080
// When you navigate to http://localhost:8080/comments, it should return a list of comments in JSON format
// The comments should be stored in a file called comments.json
// The file should contain an array of objects

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  fs.readFile('comments.json', 'utf8', function(err, data) {
    if (err) {
      // Si hay un error leyendo el archivo, devuelve un error 500
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end('Error interno del servidor');
    } else {
      // Asegúrate de que la respuesta solo se envía si el archivo se lee correctamente
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(data);
    }
  });
});

// No olvides completar la parte de escuchar en el puerto 8080
server.listen(8080, function() {
  console.log('Servidor ejecutándose en http://localhost:8080/');
});