// server.js
import express from 'express';

var http = require('http');
//create a Server object:

//app.get("/PATH", (req, res, next) => {
    db.all(sql, params, (err, rows) => {

    });
//});

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var cors = require('cors');
app.use (cors());
console.log('This is server.js');

var db = require('./database.js');

//server port
var HTTP_PORT = 8080;
//start server
app.listen(HTTP_PORT, () => {
   console.log('Server running on port 8080');
});


http.createServer(function (req, res) {
    console.log(`Hello Node.js v${process.versions.node}!`);
      res.write('Hello from my node Server, this is good!'); 
      //write  response to the client
      res.end(); //end the response

  });
    app.listen(8080); //the server object listens on port 8080

    server = app.listen("8080", function(){
     log.console("Listening to port 8080");
   });

app.get('/', function(req, res) {
  res.json({ message: 'OK'});

});

// list all books
app.get('books', (req, res, next) => {
   let sql = 'SELECT Name FROM book ORDER BY name';
   var params = [];
   db.all(sql, params, (err, rows) => {
      if (err) { 
         res.status(400).json({ error: err.message});
         return;
      }
      res.json({
         message: 'success',
         data: rows,

      });   
         
   });
});


