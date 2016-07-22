const request = require('request');

function findStockById(id, cb) {
    request(`http://ichart.finance.yahoo.com/table.csv?s=${id}`, function (err, resp, body) {
        if (!err && resp.statusCode == 200) {
            cb(body)
        }
    });
}

findStockById("GOOG", function(body) {
    var firstLine = body.split("\n")[1];
    return firstLine.split(",")[1];
});

