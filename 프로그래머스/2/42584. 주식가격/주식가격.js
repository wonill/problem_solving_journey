function solution(prices) {
    let stack = [];
    
    let answer = Array(prices.length);
    
    for (let i = 0; i < prices.length; i++){
        stack.push(i);
        
        if (prices[i] > prices[i + 1]){
            while (prices[stack[stack.length - 1]] > prices[i + 1]){
                let target = stack.pop();
                answer[target] = i + 1 - target;
            }    
        }
        
    }
    while (stack.length) {
        let k = stack.pop();
        answer[k] = prices.length - k - 1;
    }
    return answer;
}

