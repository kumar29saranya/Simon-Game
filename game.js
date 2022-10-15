//jshint esversion:6
const favicon = require('serve-favicon');
const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.use(favicon(__dirname + '/favicon.ico'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.get('/styles.css', function(req, res) {
    res.sendFile(__dirname + "/" + "styles.css");
  });
  app.get('/working.js', function(req, res) {
    res.sendFile(__dirname + "/" + "working.js");
  });


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});


