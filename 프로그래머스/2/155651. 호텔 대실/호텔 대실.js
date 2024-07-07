function addCleaningTime(time){
    let end_minutes = Number(time[1].split(':')[1]);
    if (end_minutes + 9 >= 60){
        time[1] = (Number(time[1].split(':')[0]) + 1) + ':'  
            + (Number(time[1].split(':')[1]) - 51).toString().padStart(2, '0');
    }
    else{
        time[1] = time[1].split(':')[0] + ':'  + (Number(time[1].split(':')[1]) + 9);
    }
    return time;
}

function isTimeOverlapped(hour, minute, time){
    let start = time[0].split(':').map(Number);
    let end = time[1].split(':').map(Number);
    if (hour < start[0]) return false;
    if (hour === start[0] && minute < start[1]) return false;
    if (hour > end[0]) return false;
    if (hour === end[0] && minute > end[1]) return false;
    return true;
}  

function solution(book_time) {
    book_time = book_time.map(v => addCleaningTime(v));
    let overlapped_counts = [];
    for (let hour = 0; hour < 24; hour++){
        for (let minute = 0; minute < 60; minute++){
            let count = 0;
            for (let time of book_time){
                if(isTimeOverlapped(hour, minute, time)) count++;
            }
            overlapped_counts.push(count);
        }
    }
    return Math.max(...overlapped_counts);
}