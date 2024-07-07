function makeMinTimeStamp(time){
    let [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
}

function solution(book_time) {
    const timeArr = Array(makeMinTimeStamp('23:59' + 9)).fill(0);
    book_time.forEach((time, i) =>{
        const [s, e] = time;
        let start = makeMinTimeStamp(s);
        const end = makeMinTimeStamp(e) + 9;
        
        for (start; start <= end; start++){
            timeArr[start]++;
        }
    });
    return Math.max(...timeArr);
}