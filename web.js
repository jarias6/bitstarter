var express = require('express');
//var sys = require('sys');

fs = require("fs");

var app = express();
//app.set("view options", {layout: false});
//app.use(express.static(__dirname + '/bitstarter'));
//app.use(express.static(__dirname + '/Users'));

app.use(express.logger());

//var index = fs.readFileSync("./index.html","utf-8");  
//console.log(index);

//var content;
//fs.readFile('index.html', function (err, data) {
//if (err) {
//            throw err;
//         }
//         });

app.get('/', function(request, response) {
       fs.readFile("./index.html","utf-8",function (err, data){
       console.log(data);
       response.send(data);
	 //response.write(data);
	 
	}); 
    });

var port  = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 


// Include http module,
//var http = require("http"),
// And mysql module you've just installed.
  // fs = require("fs");
 
// Create the http server.
//http.createServer(function (request, response) {
   // Attach listener on end event.
  // request.on("end", function () {
      // Read the file.
    //  fs.readFile('./index.html', 'utf-8', function (error, data) {
         // Write headers.
      //   response.writeHead(200, {
        //    'Content-Type': 'text/plain'
       //  });
         // Increment the number obtained from file.
         //data = parseInt(data) + 1;
         // Write incremented number to file.
         //fs.writeFile('test.txt', data);
         // End response with some nice message.
         //response.end('This page was refreshed ' + data + ' times!');
      //});
   //});
// Listen on the 8080 port.
//}).listen(8080);
