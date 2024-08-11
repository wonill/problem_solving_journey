const match = {
    ']' : '[',
    '}' : '{',
    ')' : '('
}

function solution(s) {
    let stack;
    let answer = 0;
    for (let i = 0; i < s.length; i++){
        const rotate = s.slice(i) + s.slice(0, i);
        stack = [];
        for (let i = 0; i < rotate.length; i++){
            if (stack.length && match[rotate[i]] === stack[stack.length - 1]) stack.pop();
            else stack.push(rotate[i]);
        }
        answer += +(stack.length === 0);
    }
    return answer;
}