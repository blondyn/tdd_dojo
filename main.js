var stockfetch = require('./stockfetch');
var fs = require('fs');

var fileReader = require('./tickerReader')(fs);
var tickerPricesGetter = require('./ticketPricesGetter');

var output = stockfetch('input', fileReader, tickerPricesGetter);
tickers = output[0]; prices = output[1];

console.log(tickers);
console.log(prices);


