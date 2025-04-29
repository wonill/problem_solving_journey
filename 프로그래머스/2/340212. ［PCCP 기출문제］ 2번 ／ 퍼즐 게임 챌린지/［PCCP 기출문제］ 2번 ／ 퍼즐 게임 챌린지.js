function solution(diffs, times, limit) {
    var level = Infinity;
    let min = 1;
    let max = limit; 
    while (min <= max){
        let mid = parseInt((min + max) / 2);
        
        let time = 0;
        for (let i = 0; i < diffs.length; i++) {
            const diff = diffs[i];
            const time_cur = times[i];
            const time_prev = i > 0 ? times[i - 1] : 0;
            
            if (diff <= mid) {
                time += time_cur;
            } else {
                time += (time_cur + time_prev) * (diff - mid) + time_cur;
            }
        }
        if (limit < time) {
            min = mid + 1;  
        } else {
            max = mid - 1;
            level = Math.min(mid, level);
        }
    }
    return level;
}