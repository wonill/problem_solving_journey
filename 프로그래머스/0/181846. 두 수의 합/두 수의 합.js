function solution(a, b) {
    var answer = '';
    let flag = false;
    a = a.padStart(Math.max(a.length, b.length), '0');
    b = b.padStart(Math.max(a.length, b.length), '0');
    for (let i = a.length - 1; i >= 0; i--){
        let sum = Number(a[i]) + Number(b[i]);
        answer = (sum + +flag) % 10 + answer;
        flag = sum >= 10 || (sum % 10 + +flag) >= 10 ? true : false;
    }
    return flag ? 1 + answer : answer;
}