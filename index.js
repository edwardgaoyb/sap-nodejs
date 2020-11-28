let file = require('./lib/file');
let spa = require('./lib/spa');

const argCount = process.argv.length;
if (argCount < 3) {
    console.log('Error: input not specifiled')
    console.log('Usage: node index.js INPUT_FILENAME');
    process.exit(1);
}
const filename = process.argv[2];
file.load2DMatrix(filename, (error, data) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    const result = spa.project(data);
    Object.entries(result.projectedValues).forEach(([k, v]) => console.log(`Projected value of ${k}: ${+v.toFixed(2)}`));
    console.log(`Projected total: ${+result.projectedTotal.toFixed(2)}`);
});
