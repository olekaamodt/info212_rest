var Crawler = require("crawler");
var cheerio = require('cheerio')

function crawlPage(url, index = 1){

    var c = new Crawler({
        maxConnections : 10,
        // This will be called for each crawled page
        callback : function (error, res, done) {
            if(error){
                console.log(error);
            }else{
                var $ = res.$;
                // $ is Cheerio by default
                //a lean implementation of core jQuery designed specifically for the server
                console.log($("title").text());
            }
            done();
        }
    });

    c.queue([{
        uri: url,
        jQuery: false,
     
        // The global callback won't be called
        callback: function (error, res, done) {
            if(error){
                console.log(error)
            }else{
                //console.log('Grabbed', res.body);
                $ = cheerio.load(res.body);
                console.log($('script').each((idx, elem) => console.log(elem.text)))
                
            }
            done();
        }
    }]);

}





crawlPage('https://hybel.no/bolig/238547/rom-i-bofellesskap-treschows-gate-15b-oslo/')

