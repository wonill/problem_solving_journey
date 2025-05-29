function solution(numbers) {
    const max = Number(numbers.split('').sort((a, b) => b - a).join(''));
    let isPrime = Array(max + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i * i <= max; i++){
        if (isPrime[i]){
            for (let j = i*i; j <= max; j += i){
                isPrime[j] = false;
            };
        }
    }
    
    let primeSet = new Set();
    let visited = Array(numbers.length).fill(false);
    let sequence = [];
    const dfs = () => {
        const newNumber = Number(sequence.join(''));
        if (isPrime[newNumber]){
            primeSet.add(newNumber);
        }        
        
        if (sequence.length === numbers.length){
            return;
        }
        
        for (let i = 0; i < numbers.length; i++){
            if (!visited[i]){
                visited[i] = true;
                sequence.push(numbers[i]);
                dfs();
                sequence.pop();
                visited[i] = false;
            }
        }
    }
    
    dfs();
    
    return primeSet.size;
}