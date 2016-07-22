module.exports = tickerPricesGetter;
const zip = require('lodash.zip');

function tickerPricesGetter(fetcher, formatter) {
    return function(tickers) {
        return fetcher(tickers).then(function(response) {
            var prices = formatter(response);

            // console.log("tickerPricesGetter: prices:" + prices);
            return zip(tickers, prices);
        });
    }
}


