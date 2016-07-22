module.exports = tickerReader;
fs = require('fs'); readline = require('readline');

function tickerReader(filename) {
    var results = [];
    var input = '';

    input = fs.readFileSync(filename, 'utf8');

    results = input.split("\n");

    return results;
    // function readLine(cb) {
    //     readline.createInterface({
    //         input: fs.createReadStream(filename),
    //         terminal: false
    //     }).on('line', function(line) {
    //         if (line != 'INVALID') {
    //             results.push(line);
    //         }
    //     }).on('close', function() {
    //         cb(results);
    //     });
    // }
}
