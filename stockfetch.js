module.exports = stockfetch;

function stockfetch(file, tickerReader, priceGetter) {
    return tickerReader(file).then(function(tickers) {
        // console.log("stockfetch: tickers:" + tickers);
        return priceGetter(tickers);
    });
}


