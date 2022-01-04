// hello-server.js

//var http = require('http');
//create a Server object:

var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

server = app.listen("8080", function(){
  console.log('Listening to port 8080' + server.address);
});

app.get("/", function (req, res){
  res.write("Hello world from server side!");
  res.end();

}
);

// Default response for any other request
app.use(function(req, res){
  res.status(404);
});

// http.createServer(function (req, res) {
//   console.log(`Hello Node.js v${process.versions.node}!`);
//   res.write('Hello from my node Server, this is good!'); 
//   //write  response to the client
//   res.end(); //end the response

// }

// ).listen(8080); //the server object listens on port 8080


