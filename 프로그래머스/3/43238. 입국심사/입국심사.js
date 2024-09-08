function solution(n, times) {
  times.sort((a, b) => a - b);
    
  let start = 1;
  let end = times[0] * n;
  
    let result = 0;
    while (start <= end){
        let mid = Math.floor((start + end) / 2);
        let sum = 0;
        for (let time of times){
            sum += Math.floor(mid / time);
        }
        if (sum >= n){
            result = mid;
            end = mid - 1;
        } else start = mid + 1;
    }
    return result;
}