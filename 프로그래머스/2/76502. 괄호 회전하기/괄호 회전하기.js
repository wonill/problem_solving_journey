const parentheses = {
    ']' : '[',
    '}' : '{',
    ')' : '('
}

function isCorrectParenthesesStr(str, start, end){
    let parenthesesStack = [];
    for (start; start <= end; start++){
        if (str[start] == '[' || str[start] == '{' || str[start] == '(') parenthesesStack.push(str[start]);
        else if (parenthesesStack[parenthesesStack.length - 1] == parentheses[str[start]]) parenthesesStack.pop();
        else return false;
    }
    if (parenthesesStack.length) return false;
    return true;
}

function solution(s) {
    let answer = 0;
    let start = 0;
    let end = s.length - 1;
    const len = s.length;
    for (let i = 0; i < len; i++){
        s += s[start];
        start++;
        end++;
        if(isCorrectParenthesesStr(s, start, end)) answer++;
    }
    return answer;
}