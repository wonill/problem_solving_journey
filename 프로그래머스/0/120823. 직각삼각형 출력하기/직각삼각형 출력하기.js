const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let line;

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let num = Number(input[0]);
    for (let i = 1; i<=num; i++){
        line = '';
        for (let j = 1; j <= i; j++){
            line += '*'
        }
        console.log(line);
    }
});