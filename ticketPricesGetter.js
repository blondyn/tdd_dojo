module.exports = ticketPricesGetter;
const request = require('good-guy-http')();

function ticketPricesGetter(tickers) {
    var prices = [];

    const requests = tickers.map(t =>
        request('http://ichart.finance.yahoo.com/table.csv?s=' + t));

    prices = Promise.all(requests).then(function (results) {
        console.log(results);
        // process price
        let values = results.map(r => r.body.toString().split('\n')[1].split(',')[1]);
        // print report
        console.log(values);

        return values;
    }).catch(console.log); // handle error

    // tickers.forEach(function (ticker) {
    //     request(`http://ichart.finance.yahoo.com/table.csv?s=${ticker}`, function (err, resp, body) {
    //         if (!err && resp.statusCode == 200) {
    //             var firstLine = body.split("\n")[1];
    //             console.log(ticker, " " ,firstLine.split(",")[1]);
    //         }
    //     });
    // });

    return prices;
}


