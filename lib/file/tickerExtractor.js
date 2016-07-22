module.exports = tickerExtractor

function tickerExtractor(blacklist) {
    return function(inputStream) {
        var resultAsList = inputStream.split("\n");

        // TODO: Add trimming

        return resultAsList.filter(function (item) {
            return item.length > 0 && !blacklist.includes(item);
        });
    };
};
