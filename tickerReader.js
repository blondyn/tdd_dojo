module.exports = tickerReader;
fs = require('fs'); readline = require('readline');

function tickerReader(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }

            var results = data.split("\n");

            var filteredResults = results.filter(function(item) {
               return item.length > 0;
            });

            resolve(filteredResults);
        });
    });
}
