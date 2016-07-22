var fs = require('fs');

var stockfetch = require('./stockfetch');
var readFile = require('./readFile')(fs);

var tickerReader = require('./tickerReader')(readFile);
var tickerPricesGetter = require('./lib/ticker-prices/ticketPricesGetter');


var output = stockfetch('input', tickerReader, tickerPricesGetter);
tickers = output[0]; prices = output[1];

console.log(tickers);
console.log(prices);


