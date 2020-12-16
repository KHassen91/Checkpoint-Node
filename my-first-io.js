const fs = require('fs');

if(process.argv.length < 3) {
    console.log('What file do i need to read?');
    return;
}

const fileContent = fs.readFileSync(process.argv[2]).toString();
const lines = fileContent.split('\n').length - 1;

console.log(lines);