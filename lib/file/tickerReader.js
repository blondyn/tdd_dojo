module.exports = tickerReader;

function tickerReader(reader) {
    return function(filename) {
        return reader(filename).then(function(result) {
            var resultAsList = result.split("\n");

            return resultAsList.filter(function (item) {
                return item.length > 0;
            });
        });
    }
}
