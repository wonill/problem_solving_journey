function solution(polynomial) {
    let answer = '';
    let numbers = polynomial.split(' + ');
    let constants = numbers.filter(v => !v.includes('x'));
    let xNum = numbers.filter(v => v.includes('x')).map(v => v.slice(0, -1));
    let x = xNum.reduce((a, c) => a + (Number(c) || 1), 0)
    let constant = constants.reduce((a, c) => a + (Number(c) || 1), 0);
    if (x != 0){
        if (x === 1) answer += 'x';
        else answer = x + 'x';
    }
    if (x != 0 && constant != 0) answer += ' + ';
    if (constant != 0) answer += constant;
    return answer;
}