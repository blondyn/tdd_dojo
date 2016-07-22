module.exports = stockfetch;

function stockfetch(file, tickerReader, priceGetter) {
    var tickers = tickerReader(file);
    var prices = priceGetter(tickers);

    // console.log("Result: " + prices);
    return [tickers, prices];
}


