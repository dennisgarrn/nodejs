// load the things we need
var express =require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// index page
app.get('/', function(req, res){
	var tools = [
	{ name: 'Node.js'},
	{ name: 'express'},
	{ name: 'EJS'}
	];
	var tagline = "Faster websites with node.js.";

	res.render('pages/index', {
		page_name: 'home',
		tools: tools,
		tagline: tagline
	});
});

// about page
app.get('/about', function(req, res){
	res.render('pages/about', {
		page_name: 'about'
	});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
