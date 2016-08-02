//Dependencies
var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');
var mongojs = require('mongojs');
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// BodyParser interprets data sent to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



// Routes

app.get('/', function(req, res) {
  res.render(index);
});




//uses local port 8080 or any available if local is not available
var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Listening on %d", PORT);
});
