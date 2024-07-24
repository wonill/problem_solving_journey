function solution(emergency) {
    let result = [];
    let arr = [...emergency];
    arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++){
        result.push(arr.indexOf(emergency[i]) + 1);
    }
    return result;
}