var fs = require('fs');

var stockfetch = require('./stockfetch');
var readFile = require('./lib/file/readFile')(fs);
var tickerReader = require('./lib/file/tickerReader')(readFile);

var request = require('good-guy-http')();
var url = 'http://ichart.finance.yahoo.com/table.csv?s=';

var pricesFetcher = require('./lib/ticker-prices/pricesFetcher')(request, url);
var yahooPricesFormatter = function (input) {
    console.log(input.body.toString().split('\n')[1].split(',')[1]);
    return input;
};
var tickerPricesGetter = require('./lib/ticker-prices/tickerPricesGetter')(pricesFetcher, yahooPricesFormatter);


stockfetch('input', tickerReader, tickerPricesGetter).then(function(output) {
    // console.log(output);
});



