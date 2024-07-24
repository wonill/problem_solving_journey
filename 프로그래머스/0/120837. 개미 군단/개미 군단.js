function solution(hp) {
    var answer = 0;
    while (hp >= 5) {
        hp -= 5;
        answer++;
    }
    while (hp >= 3){
        hp -=3;
        answer++;
    }
    while (hp >= 1){
        hp--;
        answer++;
    }
    return answer;
}