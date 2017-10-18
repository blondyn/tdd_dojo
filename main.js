var stockfetch = require('./stockfetch');
var readFile = require('./readFile');

var tickerReader = require('./tickerReader')(readFile);
var tickerPricesGetter = require('./ticketPricesGetter');


var output = stockfetch('input', tickerReader, tickerPricesGetter);
tickers = output[0]; prices = output[1];

console.log(tickers);
console.log(prices);


