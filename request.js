const request = require('request');

module.exports = findStockPriceById;

function findStockPriceById(id) {
    request(`http://ichart.finance.yahoo.com/table.csv?s=${id}`, function (err, resp, body) {
        if (!err && resp.statusCode == 200) {
            var firstLine = body.split("\n")[1];
            console.log(id, " " ,firstLine.split(",")[1]);
        }
    });
}


