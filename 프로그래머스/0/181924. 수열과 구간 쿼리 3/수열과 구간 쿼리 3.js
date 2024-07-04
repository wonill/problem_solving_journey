function swap(arr, i, j){
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}

function solution(arr, queries) {
    queries.forEach(v => swap(arr, v[0], v[1]));
    return arr;
}