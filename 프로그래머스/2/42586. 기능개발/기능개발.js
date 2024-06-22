function solution(progresses, speeds) {
    var answer = [];
    let taskTimes = [];
    let stack = [];
    for (let i = 0; i < progresses.length; i++){
        let remain = 100 - progresses[i]
        taskTimes.push(remain % speeds[i] === 0 ? parseInt(remain / speeds[i]) 
                       : parseInt(remain / speeds[i]) + 1);
    }
    console.log(taskTimes);
    for (let taskTime of taskTimes){
        if (stack[0] < taskTime){
            answer.push(stack.length);
            stack = [taskTime];
        } else {
            stack.push(taskTime);
        }
    }
    if (stack.length) answer.push(stack.length);
    return answer;
}
