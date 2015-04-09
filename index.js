// load the things we need
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

// set up our one route to the index.html file
app.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/public/views/pages/index.html'));
});

app.listen(5000);
console.log('This port is better than yours');