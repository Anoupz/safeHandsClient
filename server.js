var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/pages'));

// set up our one route to the index.html file
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

// start the server on port 8080 (http://localhost:8080)
app.listen(8080);
console.log('Magic happens on port 8080.');