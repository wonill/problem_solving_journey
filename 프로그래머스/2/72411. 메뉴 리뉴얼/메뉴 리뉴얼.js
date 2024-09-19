
// 가능한 조합 모두 생성
const getCombinations = (order, len) => {
    const result = [];
    
    const dfs = (start, current) => {
        if (current.length === len) {
		        // 조합이 생성되면 알파벳 순으로 정렬해서 추
            result.push(current.split('').sort().join(''));
            return;
        }
        
        for (let i = start; i < order.length; i++) {
            dfs(i + 1, current + order[i]);
        }
    };
    
    dfs(0, '');
    return result;
}

function solution(orders, course) {
    let answer = [];
    
    course.forEach(len => {
        let combinations = new Map();
        
        orders.forEach(order => {
            getCombinations(order, len).forEach(comb => {
                combinations.set(comb, (combinations.get(comb) || 0) + 1);
            });
        });
        
        const max = Math.max(...combinations.values());
        // 최대 2번 이상 주문된 경우에만
        if (max >= 2) {
            combinations.forEach((count, menu) => {
                if (count === max) answer.push(menu);
            });
        }
    });
    
    return answer.sort();
}