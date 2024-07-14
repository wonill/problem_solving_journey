function solution(my_str, n) {
    var answer = [];
    my_str = [...my_str];
    while(my_str.length) answer.push(my_str.splice(0, n).join(''));
    return answer;
}