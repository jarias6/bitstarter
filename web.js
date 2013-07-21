var express = require('express');

fs = require("fs");

var app = express();

app.use(express.logger());

fs.readFile("./index.html", "utf-8", function (err, data) {
if (err) {
            throw err;
         }                });

app.get('/', function(request, response) {   
       response.send(data);
    });

var port  = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 


 