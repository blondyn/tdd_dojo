module.exports = tickerPricesGetter;
const zip = require('lodash.zip');

function tickerPricesGetter(fetcher) {
    return function(tickers) {
        return fetcher(tickers).then(function(prices) {
            return zip(tickers, prices);
        });
    }
}


