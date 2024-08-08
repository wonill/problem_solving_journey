function solution(numbers) {
    let allPossibleSums = [];
    for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++){
            allPossibleSums.push(numbers[i] + numbers[j]);
        }
    }
    
    return [...new Set(allPossibleSums)].sort((a, b) => a - b);
}