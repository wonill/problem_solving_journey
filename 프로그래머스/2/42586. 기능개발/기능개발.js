function solution(progresses, speeds) {
    var answer = [];
    let taskTimes = [];
    let stack = [];
    for (let i = 0; i < progresses.length; i++) taskTimes.push(Math.ceil((100 - progresses[i]) / speeds[i]));
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
