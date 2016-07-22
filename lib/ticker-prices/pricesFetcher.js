module.exports = function (request, url) {
    return function (tickers) {
            var t = tickers.map(function (ticker) {
                // console.log("pricesFetcher: ticker: " + ticker);
                return request(url + ticker).catch(function(e) { return e.message });
            });
        return Promise.all(t);
    }
};
