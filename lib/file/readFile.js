module.exports = readFile;
function readFile(reader) {
    return function(path) {
        return new Promise(function (resolve, reject) {
            reader.readFile(path, 'utf8', function (err, data) {
                if (err) {
                    reject(err);
                }

                resolve(data);
            });
        });
    }
};
