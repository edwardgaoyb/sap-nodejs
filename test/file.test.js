const assert = require('assert');
const file = require('../lib/file');

describe('File loading test', () => {
    it('should load the file successfully', () => {
        assert.strictEqual(file.load2DMatrix('testin1.txt'), [['1', '2', '3'], ['4', 'A', '6'], ['7', '8', 'B']]);
    });
    it('should throw error if the file does not exist', () => {
        assert.throws(() => { file.load2DMatrix('NON_EXISTENT_FILENAME') }, Error, 'FILE_NOTFOUND');
    });
});