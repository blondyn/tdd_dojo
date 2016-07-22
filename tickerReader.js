module.exports = tickerReader;

function tickerReader(reader) {
    return function(filename) {
        return new Promise(function (resolve, reject) {
            reader.readFile(filename, 'utf8', function (err, data) {
                if (err) {
                    reject(err);
                }

                var results = data.split("\n");

                var filteredResults = results.filter(function (item) {
                    return item.length > 0;
                });

                resolve(filteredResults);
            });
        });
    }
}
