const fs = require('fs');

function load2DMatrix(filename, callback) {
    console.log(`parsing input file ${filename}`);
    fs.readFile(filename, 'utf8', function (error, data) {
        if (error) {
            callback(error, null)
        } else {
            let result = [];
            data.split('\n').map(line => {
                result.push(line.split(/\s/));
            });
            callback(null, result);
        }
    });

}

module.exports.load2DMatrix = load2DMatrix;