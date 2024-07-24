function solution(emergency) {
    let set = new Set();
    let arr = [...emergency];
    arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < emergency.length; j++){
            if (!set.has(j) && arr[i] === emergency[j]) {
                emergency[j] = i + 1;
                set.add(j);
            }
        }
    }
    return emergency;
}