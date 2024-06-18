function solution(arr){
    let answer = [];
    let k = -1;
    for (let i=0; i < arr.length; i++){
        if (k != arr[i]){
            answer.push(arr[i]);
            k = arr[i];
        }
    }
    return answer;
}   