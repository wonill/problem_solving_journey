function solution(k, n, reqs) {
    // 각 유형별 상담원 수에 따른 대기 시간을 계산하는 함수
    function calculateWaitTime(type, count, requests) {
        let consultants = Array(count).fill(0);
        let totalWait = 0;
        
        for (let [start, duration, reqType] of requests) {
            if (reqType !== type) continue;
            
            let earliestEnd = Math.min(...consultants);
            let wait = Math.max(0, earliestEnd - start);
            totalWait += wait;
            
            let endTime = Math.max(start, earliestEnd) + duration;
            let index = consultants.indexOf(earliestEnd);
            consultants[index] = endTime;
        }
        
        return totalWait;
    }
    
    // 모든 가능한 조합을 탐색하는 재귀 함수
    function findBestAllocation(types, remaining, allocation = []) {
        if (types === 0) {
            if (remaining !== 0) return Infinity;
            
            let totalWait = 0;
            for (let i = 1; i <= k; i++) {
                totalWait += calculateWaitTime(i, allocation[i-1], reqs);
            }
            return totalWait;
        }
        
        let minWait = Infinity;
        for (let i = 1; i <= remaining - types + 1; i++) {
            let newAllocation = [...allocation, i];
            let wait = findBestAllocation(types - 1, remaining - i, newAllocation);
            minWait = Math.min(minWait, wait);
        }
        
        return minWait;
    }
    
    return findBestAllocation(k, n);
}