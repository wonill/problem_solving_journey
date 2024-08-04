function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function gcdMultiple(numbers) {
    return numbers.reduce((acc, num) => gcd(acc, num));
}

function solution(arrayA, arrayB) {
    let gcdA = gcdMultiple(arrayA);
    let gcdB = gcdMultiple(arrayB);
    let a = arrayA.some(v => v % gcdB === 0) ? 0 : gcdB;
    let b = arrayB.some(v => v % gcdA === 0) ? 0 : gcdA;
    
    return Math.max(a, b);
}