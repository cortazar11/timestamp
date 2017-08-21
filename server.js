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
/*

function myDate(item){
  
  
  return {"decoded":item};
  
  
  
  var now=new Date(item)
  
  Object.keys(obj).forEach(function(key){
    
              return dateformat(now,obj[key])
      
  
                      
              })
  

}*/


                          



app.use("/",function(req,res){
    var result; 
  
  
    var obj={
          default:"ddd mmm dd yyyy HH:MM:ss",
          shortDate:"m/d/yy",
          mediumDate: "mmm d, yyyy",
          longDate:"mmmm d, yyyy",
          fullDate:"dddd, mmmm d, yyyy",
          shortTime:"h:MM TT",
          mediumTime:"h:MM:ss TT",
          longTime:"h:MM:ss TT Z",
          isoDate:"yyyy-mm-dd",
          isoTime:"HH:MM:ss",
          isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",
          isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"

        }
  
  
      var requested=req.path.substring(1)
      if(/^[0-9]{1,13}$/.test(requested)){
            res.end(requested)
        } else {
          res.end("caca")
        }
      
      var decoded=decodeURI(requested)
      var now= new Date(decoded)
      
      Object.keys(obj).forEach(function(key){
              var myDate=dateformat(now,obj[key])
        
                 if(typeof myDate=="string"){
                   var unixTime=  new Date(decoded).getTime()/1000
                  // res.json({"unix":unixTime,"natural":decoded})
                 } 
                  
              
    
                    
      
                  })
      
     
  
  
  
  
      
      //res.json(unixTime)

      var myDate=new Date(requested*1000)
      var naturalDate=dateformat(myDate,"mmmm d, yyyy")
      //res.json(naturalDate)
     //res.end(decoded)
  
      //res.json(result)
  
  
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
