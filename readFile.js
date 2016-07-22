var fs = require('fs');

module.exports = readFile;
function readFile(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }

            resolve(data);
        });
    });
};
