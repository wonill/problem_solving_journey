const op = {
    '+' : (a, b) => Number(a) + Number(b),
    '-' : (a, b) => Number(a) - Number(b)
}

function solution(quiz) {
    return quiz.map(v => {
        const expression = v.split('=');
        const result = Number(expression[1].trim());
        const [num1, oper, num2] = expression[0].trim().split(' ');
        
        return op[oper](num1, num2) === result ? 'O' : 'X';
    });
}