function solution(money) {
    var answer = [0,0];
    answer[1] = money % 5500;
    answer[0] = (money - answer[1]) / 5500;
    return answer;
}