function solution(s) {
    var answer = 1;
    let ch = s[0];
    let count = 0;
    let flag;
    for (let i = 0; i < s.length; i++){
        if (count == 0 && flag){
            ch = s[i];
            answer++;
            flag = false;
        }
        if (s[i] == ch) count++;
        else count--;
        if (count == 0) flag = true;
    }
    return answer;
}