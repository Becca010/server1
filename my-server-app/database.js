//import sqlite3 from 'sqlite3';
var express = require("express")
var cors = require('cors');
var bodyParser = reqire("body-bodyParser");
var db = require("./database.js") 
var sqlite = require('sqlite3');

var app = express()
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false}));
//app.use(bodyParser.json());
app.post("./PATH/", (req, res, next) => {
  var data = {
    value: re.body.value,
    value2: req.body.value2,
  }
  var sql = '...'
  var params = [data.value, data.value2]
  db.run(sql, params, function(err, result){

  });
});
let db = new sqlite.Database(' :memory:', (err) => {
  if(err){
    return console.error("Something happened!");
  }else{
    console.log("Database created :")
  }
});

let sql = 'Create Table book (name text)';
db.run(sql,(err) => {
  if(err){
    //Table already created
    return console.error('Something happeened!');
  }else{
     console.log('Create Table book with single column name. :)');
  //First time table created, creating some rows
  var insert = 'INSERT INTO book(name) VALUES(?)';
  db.run(insert, ['JavaScript Programming']);
  db.run(insert, ['React with Hooks']);
  db.run(insert, ['Algorithms and Data Types']);
});

db.close((err) =>{
  if(err){
    return console.error(err.message);
  }
  console.log('close the database connection.');
  });

  //export as module, called db
  module.exports = db




