function solution(l, r) {
    var answer = [];
    while(l <= r){
        if (!l.toString().replaceAll('5', '').replaceAll('0', '').length) answer.push(l);
        l++;
    }
    return answer.length ? answer : [-1];
}