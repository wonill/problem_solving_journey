function solution(age) {
    return [...String(age)].map(v => String.fromCharCode(Number(v) + 97)).join('');
}