function solution(n,a,b)
{
    let answer = 0;
    while(a != b){
        answer++;
        a = Math.round(a / 2);
        b = Math.round(b / 2)
    }

    return answer;
}