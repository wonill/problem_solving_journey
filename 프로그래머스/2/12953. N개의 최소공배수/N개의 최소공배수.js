function solution(arr) {
    // var answer = 0;
    // let divisors = [1];
    // let flag;
    // let divide = 2;
    // arr = [...new Set(arr)];
    // while (true){
    //     flag = true;
    //     for (let i = 0; i < arr.length; i++){
    //         if (arr[i] % divide  != 0){
    //             flag = false;
    //             break;
    //         }
    //     }
    //     if (flag) {
    //         divisors.push(divide);
    //         for(let i = 0; i < arr.length; i++) arr[i] /= divide;
    //         divide = 2;
    //     } else {
    //         if (Math.min(...arr) <= divide) break;
    //         divide++;
    //     }
    // }
    // return arr.reduce((a, b) => a * b) * divisors.reduce((a, b) => a * b);
    arr.sort((a, b) => (a - b));
    let max = arr.pop();
    let multiple = 1;
    let flag;
    while (!flag){
        flag = true;
        for (let i = 0; i < arr.length; i++){
            if (max * multiple % arr[i] != 0){
                flag = false;
                multiple++;
                break;
            }
        }
    }
    return max * multiple;
}