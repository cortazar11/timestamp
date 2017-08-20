// server.js
// where your node app starts

// init project
var express = require('express');
var dateformat=require("dateformat")
var moment=require("moment")


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
var myObject={
  default:"ddd mmm dd yyyy HH:MM:ss",
  shortDate:"m/d/yy",
  mediumDate: "mmm d, yyyy",
  
  
}


app.use("/",function(req,res){
  var longDate= "mmmm d, yyyy"
  
  var requested=req.path.substring(1)
  var decoded=decodeURI(requested)
  
  var unixTime=  new Date(decoded).getTime()/1000
  //res.json(unixTime)
  
  var myDate=new Date(requested*1000)
  var naturalDate=dateformat(myDate,"mmmm d, yyyy")
  res.json(naturalDate)
 //res.end(decoded)
  
  
  
  
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
