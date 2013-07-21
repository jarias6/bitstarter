var express = require('express');
var sys = require('sys');

fs = require("fs");

var app = express();
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/bitstarter'));

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