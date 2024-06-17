function solution(arr) {
    let len = 1;
    while (arr.length > len){
        len *= 2;
    }
    while (len - arr.length > 0){
        arr.push(0);
    }
    return arr;
}