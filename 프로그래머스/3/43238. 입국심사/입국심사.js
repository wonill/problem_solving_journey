function solution(n, times) {
    times.sort((a,b) => 
               a-b);
    let res = -1;
    let rt = times[times.length-1] * n;
    let lt = 0;
    
    while (lt<=rt){
        let mid = Math.floor((rt+lt) / 2);
        let max = 0;
        
        for (let e of times){
            //모든 심사관의 최대 심사 횟수를 계산
            max += Math.floor(mid / e);
        }
        
        if(max >= n){
            //초과해서 가능할 경우
            res = mid;
            rt = mid - 1;
        }else{
            //심사가 완료가 불가능한 경우
            lt = mid + 1;
        }
    }
    return res;
}