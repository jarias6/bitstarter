var express = require('express');
// Include http module,
var http = require("http"),
// And mysql module you've just installed.
fs = require("fs");

var app = express();
app.use(express.logger());

fs.readFile('index.html',function (error, data) {
if (error) 
{
throw error;
}
console.log(data);
});

app.get('/', function(request, response) {
	response.send(data);
    });

var port  = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 