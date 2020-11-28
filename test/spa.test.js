const assert = require('assert');
const spa = require('../lib/spa');

describe('Calculation test', () => {
    it('should project the result for the given example', () => {
        const matrix = [['1', '2', '3'], ['4', 'A', '6'], ['7', '8', 'B']];
        const expected = {
            'projectedValues': {
                'A': 5,
                'B': 7
            },
            'projectedTotal': 43
        }
        assert.deepStrictEqual(spa.project(matrix), expected);
    })
});