function solution(want, number, discount) {
    var answer = 0;
    let wantMap = new Map();
    for (let i = 0; i < want.length; i++) wantMap.set(want[i], number[i]);
    let len = number.reduce((a, b) => a + b);
    for (let i = 0; i <= discount.length - len; i++){
        let copyMap = new Map([...wantMap]);
        for (let j = 0; j < 10; j++){
            let product = discount[i + j];
            if (copyMap.get(product))
                copyMap.set(product, copyMap.get(product) - 1); 
        }
        let sum = 0;
        for (let value of copyMap.values()) sum += value;
        if (sum === 0) answer++;
    }
    return answer;
}