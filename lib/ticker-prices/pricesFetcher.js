module.exports = function (request, url) {
    return function (tickers) {
        return tickers.map(function (ticker) {
            return request(url + ticker)
        })
    }
};
