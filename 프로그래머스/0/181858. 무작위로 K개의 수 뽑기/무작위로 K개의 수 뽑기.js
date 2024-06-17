function solution(arr, k) {
    let answer = [];
    let set = new Set(arr);
    for (let num of set){
        if(answer.length < k){
            answer.push(num);
        }
    }
    while(answer.length < k){
        answer.push(-1);
    }
    return answer;
}