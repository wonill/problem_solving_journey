function solution(plans) {
    const answer = [];
    const stack = [];
    plans = plans.map(([subject, startTime, duration]) => {
        const [hours, minutes] = startTime.split(':').map(Number);
        return [subject, hours * 60 + minutes, Number(duration)];
    }).sort((a, b) => a[1] - b[1]);
    
    for (let i = 0; i < plans.length - 1; i++){
        const time = plans[i + 1][1] - plans[i][1];
        if (time < plans[i][2]){
            plans[i][2] -= time;
            stack.push(plans[i]);
        } else {
            let remainTimes = time - plans[i][2];
            answer.push(plans[i][0]);
            while (stack.length && remainTimes - stack.at(-1)[2] >= 0){
                const subject = stack.pop();
                remainTimes -= subject[2];
                answer.push(subject[0]);
            }
            if (stack.length){
                stack.at(-1)[2] -= remainTimes;    
            }
        }
    }
    answer.push(plans.at(-1)[0]);
    
    while (stack.length){
        answer.push(stack.pop()[0]);
    }
    
    return answer;
}
