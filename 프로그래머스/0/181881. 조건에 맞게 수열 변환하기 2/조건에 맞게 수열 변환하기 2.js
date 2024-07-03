function isSameArr(arr, arr2){
    return !arr.filter((_, i) => arr[i] != arr2[i]).length;
}

function solution(arr) {
    let prev;
    let answer = -1;
    while (!prev || !isSameArr(prev, arr)){
        prev = [...arr];
        for (let i = 0; i < arr.length; i++){
            if (arr[i] >= 50 && arr[i] % 2 === 0) arr[i] /= 2;
            else if (arr[i] < 50 && arr[i] % 2 === 1) arr[i] = arr[i] * 2 + 1;
        }
        answer++;
    }
    return answer;
}