function solution(new_id) {
    var answer = '';
    new_id = new_id.toLowerCase();
    for (let i = 0; i < new_id.length; i++){
        let ch = new_id.charAt(i);
        if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9') || ch === '-' || ch === '_' || ch === '.')
            answer += ch;
    }
    while (answer.indexOf("..") != -1) answer = answer.replace("..", ".");
    while (answer.charAt(0) === '.') answer = answer.substring(1);
    while (answer.charAt(answer.length - 1) === '.') answer = answer.substring(0, answer.length - 1);
    if (answer === '') answer += 'a';
    answer = answer.slice(0, 15);
    if (answer.charAt(answer.length - 1) === '.') answer = answer.substring(0, answer.length - 1);
    while (answer.length < 3) answer += answer.charAt(answer.length - 1);
    return answer;
}