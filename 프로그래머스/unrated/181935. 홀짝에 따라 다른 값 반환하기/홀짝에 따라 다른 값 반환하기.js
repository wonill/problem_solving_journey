function solution(n) {
    var answer = 0;
    const isEven = n % 2 == 0? true : false;
    for(i = 1; i <= n; i++){
        if(isEven){
            answer += i%2 == 0 ? i*i : 0;
        } else{
            answer += i%2 == 1 ? i : 0;
        }
    }
    return answer;
}