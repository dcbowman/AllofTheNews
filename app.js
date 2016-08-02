var cheerio = require('cheerio');
var request = require('request');

request('http://elitedaily.com/category/news/', function(err, res, body){
	var $ = cheerio.load(body);
	var results = []

	$('h2').each(function(i, element){
		//console.log($(this).text());

		var title = $(this).text();
		var link = $(this).find('a').attr('href');

		results.push({
			title: title,
			url: link
		});
		console.log(results);
	});
});