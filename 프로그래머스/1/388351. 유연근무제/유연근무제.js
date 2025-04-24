function isHourChanged(time){
    return time % 100 >= 60;
}

function solution(schedules, timelogs, startday) {
    let result = 0;
    
    const arrivalDeadline = schedules.map(time => time + (isHourChanged(time + 10) ? 50 : 10));
    
    const saturdayIndex = 6 - (startday % 7);
    const sundayIndex = (saturdayIndex + 1) % 7;
     
    timelogs.forEach((timelog, index) => result += timelog.every((time, idx) => idx === saturdayIndex ||
                                                                 idx === sundayIndex ||
                                                                 time <= arrivalDeadline[index]) ? 1 : 0)
    
    return result;
}