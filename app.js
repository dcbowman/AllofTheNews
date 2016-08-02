var cheerio = require('cheerio');
var request = require('request');

request('http://elitedaily.com/category/news/', function(err, res, body){
	var $ = cheerio.load(body);

	$('h2').each(function(i, element){
		console.log($(this).text());

		//var title = $(this).text();
		//var link = $(this).children()attr('href');

		//results.push({
			//title: title,


			//link: link
		//});
		//console.log(results);
	});
});