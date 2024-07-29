function solution(arr) {
    return +arr.every((v, i, array) => {
        for (let j = 0; j < v.length; j++){
            if (v[j] != arr[j][i]) return false;
        }
        return true;
    })
}