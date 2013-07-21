var express = require('express');
var sys = require('sys');
app.set("view options", {layout: false});
    app.use(express.static(__dirname + '/bitstarter'));

// Include http module,
//var http = require("http"),

fs = require("fs");

var app = express();
app.use(express.logger());

//var content;
//fs.readFile('index.html', function (err, data) {
//if (err) {
//            throw err;
//         }
//         });

app.get('/', function(request, response) {
    fs.readFile('index.html',function (err, data){
       response.send(data);
	 //response.write(data);
	 console.log(data);
	}); 
    });

var port  = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 