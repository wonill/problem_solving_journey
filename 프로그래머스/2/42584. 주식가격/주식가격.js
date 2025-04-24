function solution(prices) {
    let answer = Array(prices.length).fill(0);
    
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j< prices.length; j++) {
            answer[i]++;
            if (prices[j] < prices[i]) break;
        }
    }
    return answer;
}

