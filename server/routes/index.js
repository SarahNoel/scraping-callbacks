var csv = require('csv');
var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var hackerNews = 'https://news.ycombinator.com';
var redditSite = 'https://www.reddit.com/r/Web_Development/';
var mdnjs = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
var python = 'https://www.python.org/';


router.get('/newsies', function(req, res, next){
  request(hackerNews, function(error, response, html){
    if (!error && response.statusCode == 200) {
      var hacker = checkFor(html, 'span.comhead', 'JavaScript');
      if(hacker){
        request(redditSite, function(error, response, html){
          if (!error && response.statusCode == 200) {
            var reddit = checkFor(html, 'span.domain', 'JavaScript');
            if(reddit){
              getSite(mdnjs, 'https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png', res);
            }
            else{
              getSite(python, 'https://www.python.org/static/img/python-logo.png', res);
            }
          }
        });
      }
      else{
        getSite(python, 'https://www.python.org/static/img/python-logo.png', res);
      }
    }
  });
});

module.exports = router;



//helper functions
function getSite(url, img, res){
  request(url, function (error, response, html) {
      if (!error && response.statusCode == 200) {
        res.json({url:url, html:html, img:img});
      }
  });
}

function checkFor(html, className, lookingFor){
  var allTitles = [];
  var $ = cheerio.load(html);
  $(className).each(function(i, element){
    // select previous element
    var a = $(this).prev();
    // parse the link title
    var title = a.text();
    // data store in an object (for dumping to mongo)

    var titleArr = scrapedData.title.split(' ');
    for (var j = 0; j < titleArr.length; j++) {
      if (titleArr[j].trim().toUpperCase() === lookingFor.toUpperCase()){
        allTitles.push(scrapedData.title);
      }
    }
  });

  if(allTitles.length > 0){
    return true;
  }
  return false;
}


