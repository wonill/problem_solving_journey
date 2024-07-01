function solution(arr) {
    var stk = [];
    for (let i = 0; i < arr.length; i++){
        if (!stk.length) stk.push(arr[i]);
        else if (stk.length && stk[stk.length - 1] < arr[i]) stk.push(arr[i]);
        else if (stk.length && stk[stk.length - 1] >= arr[i]) {
            stk.pop();
            i--;
        }
    }
    return stk;
}