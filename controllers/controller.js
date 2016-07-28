//Require modules
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


//Page rendering route 
app.get('/', function(req, res) {

			res.render('index');
   	});