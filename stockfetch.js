module.exports = stockfetch;

function stockfetch(file, tickerReader, priceGetter) {
    return tickerReader(file).then(function(tickers) {
        return priceGetter(tickers);
    });

    // console.log("Result: " + prices);

}


