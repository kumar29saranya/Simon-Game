//jshint esversion:6
const favicon = require('serve-favicon');
const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.use(favicon(__dirname + '/images/favicon.ico'));

app.use('/images', express.static('images'));
app.use('/images', express.static('sounds'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/css/styles.css', function(req, res) {
    res.sendFile(__dirname + "/" + "css/styles.css");
});

  app.get("/gamepage.html", function(req, res){
    res.sendFile(__dirname + "/gamepage.html");
});
  app.get('/css/styles2.css', function(req, res) {
    res.sendFile(__dirname + "/" + "css/styles2.css");
});
  app.get('/working.js', function(req, res) {
    res.sendFile(__dirname + "/" + "working.js");
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});


