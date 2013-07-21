var express = require('express');

// Include http module,
var http = require("http"),
// And mysql module you've just installed.
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
	}); 
    });

var port  = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 