fs = require('fs'); readline = require('readline');
const findStockPriceByid = require("./request");

var filename = 'input';
var results = [];

function readLine(cb) {
    readline.createInterface({
        input: fs.createReadStream(filename),
        terminal: false
    }).on('line', function(line) {
        //console.log("Read " + line);
        if (line != 'INVALID') {
            results.push(line);
        }
    }).on('close', function() {
        cb(results);
    });
}

readLine(function(result) {
    result.forEach(function(stockId) {
        findStockPriceByid(stockId);
    });
});


