module.exports = tickerPricesGetter;
const zip = require('lodash.zip');

function tickerPricesGetter(fetcher) {
    return function(tickers) {
        return fetcher(tickers).then(function(prices) {
            return zip(tickers, prices);
        });
        //fetcher(tickers).then(function (results) {
        //    console.log(results);
        //    // process price
        //    let values = results.map(r => r.body.toString().split('\n')[1].split(',')[1]);
        //    // print report
        //    console.log(values);
        //
        //    return values;
        //}).catch(console.log); // handle error
        //
        //
        //return prices;
    }
}


