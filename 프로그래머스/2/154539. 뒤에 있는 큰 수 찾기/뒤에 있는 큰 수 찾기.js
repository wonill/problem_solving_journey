function solution(numbers) {
    let answer = [];
    let maxNum = 0;
    let stack = [];
    for (let i = numbers.length - 1; i >= 0; i--){
        if (numbers[i] >= maxNum){
            answer.push(-1);
            maxNum = numbers[i];
            stack = [];
            stack.push(maxNum);
        }
        else {
            while(1) {
                if (numbers[i] >= stack[0]){
                    stack.shift();
                }
                else {
                    answer.push(stack[0]);
                    stack.unshift(numbers[i]);
                    break;
                }
            }
        }
    }
    return answer.reverse();
}