var stockfetch = require('./stockfetch');

var fileReader = require('./tickerReader');
var tickerPricesGetter = require('./ticketPricesGetter');

var output = stockfetch('input', fileReader, tickerPricesGetter);
tickers = output[0]; prices = output[1];

console.log(tickers);
console.log(prices);


