// var cheerio = require('cheerio');
// var request = require('request');

// //Initialize express
// var express = require('express');
// var app = express();


// //pulls info using request npm from website
// request('http://elitedaily.com/category/news/', function(err, res, body){
// 	var $ = cheerio.load(body);
// 	var results = []

// 	//pulls all of the h2 values for the body of the site
// 	$('h2').each(function(i, element){
// 		//console.log($(this).text());


// 		//grabs the text of all of the h2 values and looks for the link that is related to those values
// 		var title = $(this).text();
// 		var link = $(this).find('a').attr('href');

// 		//pushes those values into the results array
// 		results.push({
// 			title: title,
// 			url: link
// 		});

// 		//check correct info is being scraped
// 		console.log(results);
// 	});
// });

// //saves the URL of our database and names the collection

// var databaseURL = "news";
// var collections = "stories";

// //uses mongojs to hook the db to the db variable
// var db = mongojs(databaseURL, collections);

// //ensures any errors are logged if mongodb runs into an issue
// db.on('error', function(err){
// 	console.log("Database Error:", err);
// });