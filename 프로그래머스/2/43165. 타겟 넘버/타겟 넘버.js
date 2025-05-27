function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (idx, result) => {
        
        if (idx === numbers.length){
            answer += result === target;
            return
        }
        
        for (let i = 0; i < 2; i++){
            result += i ? numbers[idx] : -numbers[idx];
            dfs(idx + 1, result);
            result -= i ? numbers[idx] : -numbers[idx];
        }
    }
    
    dfs(0, 0);
    return answer;
}