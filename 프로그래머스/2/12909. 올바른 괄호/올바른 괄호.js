function solution(s){
    let stack = 0;
    for (let i = 0; i < s.length; i++){
        if (s.charAt(i) === '(') stack++;
        else if (stack === 0) return false;
        else stack--;
    }
    return stack === 0;
}