
function solution(s) {
    let answer = 0;
    if (s.length % 2 === 1) return 0;
    const mapping = {']' : '[', '}' : '{', ')' : '('};
    
    for (let i = 0; i < s.length; i++){
        const stack = [];
        const rotate = s.slice(i) + s.slice(0, i);
        let flag = true;
        for (j = 0; j < s.length; j++){
            if (rotate[j] === '[' || rotate[j] === '{' || rotate[j] === '(') stack.push(rotate[j]);
            else {
                let last = stack.pop();
                if (last != mapping[rotate[j]]){
                    flag = false;
                    break;
                }
            }
        }
        if (flag) answer++;
    }
    return answer;
}