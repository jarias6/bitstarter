var express = require('express');

var app = express();
app.use(express.logger())

fs.readFile('index.html',function (error, data));

app.get('/', function(request, response) {
	response.send(data);
    });

var port  = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 