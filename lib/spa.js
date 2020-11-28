function projectCell(cell, rowIndex, colIndex, matrix) {
    let validAdj = [];
    const offsetPairs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    offsetPairs.map(offsetPair => {
        try {
            let adj = matrix[rowIndex + offsetPair[0]][colIndex + offsetPair[1]];
            if (!isNaN(adj)) {
                validAdj.push(Number(adj));
            }
        } catch (TypeError) { }
    });
    if (validAdj.length === 0) {
        return 0
    };
    return validAdj.reduce((a, b) => a + b) / validAdj.length;
}

function project(matrix) {
    let projectedValues = {};
    let projectedTotal = 0;

    matrix.map((row, rowIndex) => {
        row.map((cell, colIndex) => {
            if (isNaN(cell)) {
                let projectedValue = projectCell(cell, rowIndex, colIndex, matrix);
                projectedValues[cell] = projectedValue;
                projectedTotal += projectedValue;
            } else projectedTotal += Number(cell);
        });
    })
    return { projectedValues, projectedTotal };
}

module.exports.project = project;