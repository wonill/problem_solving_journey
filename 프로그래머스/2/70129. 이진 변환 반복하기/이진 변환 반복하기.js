function solution(s) {
    let answer = [0, 0];
    while (s != '1'){
        answer[1] += s.length - s.replaceAll('0','').length;
        answer[0]++;
        s = s.replaceAll('0','').length.toString(2);
    }
    return answer; 
}