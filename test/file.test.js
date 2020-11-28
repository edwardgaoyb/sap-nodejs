const assert = require('assert');
const file = require('../lib/file');

describe('File loading test', () => {
    it('should load the file successfully', done => {
        file.load2DMatrix('./test/testin1.txt', function (error, data) {
            assert.strictEqual(error, null);
            assert.deepStrictEqual(data, [['1', '2', '3'], ['4', 'A', '6'], ['7', '8', 'B']]);
            done();
        });
    });
    it('should throw error if the file does not exist', done => {
        file.load2DMatrix('NON_EXISTENT_FILENAME', function (error, data) {
            console.log(error.code);
            assert.strictEqual(error.code, 'ENOENT');
            done();
        });
    });
});