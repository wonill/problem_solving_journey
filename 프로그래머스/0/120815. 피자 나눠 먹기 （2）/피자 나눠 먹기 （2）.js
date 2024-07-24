function solution(n) {
    var answer = 0;
    while (++answer * 6 % n != 0) ;
    return answer;
}