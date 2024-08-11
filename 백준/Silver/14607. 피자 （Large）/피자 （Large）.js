const N = BigInt(require('fs').readFileSync('./dev/stdin').toString().trim());
console.log(((N * (N - BigInt(1))) / BigInt(2)).toString());