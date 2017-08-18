// server.js
// where your node app starts

// init project
var express = require('express');
var dateformat=require("dateformat")


var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//var uri="December%2015,%202015"
//console.log("Date: "+decodeURI(uri))

app.use("/",function(req,res){
  var requested=req.path.substring(1)
  var decoded=decodeURI(requested)
  var  dateObj=new Date(decoded)
  var isoDate=dateformat(dateObj, "isoDateTime")
  
  
  res.end(dateformat(dateObj, "isoDateTime"))
  
  
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
