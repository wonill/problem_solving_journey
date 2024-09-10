function solution(prices) {
    let answer = [];
    prices.reverse();
    
    let cnt;
    while (price = prices.pop()){
        cnt = 0;
        for (let i = 0; i < prices.length; i++){
            cnt = i + 1;
            if (prices[prices.length - 1 - i] < price) break;
        }
        answer.push(cnt);
    }
    return answer;
}



