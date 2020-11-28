let file = require('./lib/file');
let spa =require('./lib/spa');

const argCount = process.argv.length;
if (argCount < 3) {
    console.log('Error: input not specifiled')
    console.log('Usage: node index.js INPUT_FILENAME');
    process.exit(1);
}

const filename = process.argv[2];
console.log(`parsing input file ${filename}`);
const matrix = file.load2DMatrix(filename);
const result = spa.project(matrix);
Object.entries(result.projectedValues).forEach(([k, v]) => console.log(`Projected value of ${k}: ${v}`));
console.log(`Projected total: ${result.projectedTotal}`);