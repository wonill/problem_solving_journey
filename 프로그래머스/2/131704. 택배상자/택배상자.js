function solution(order) {
    var answer = 0;
    let stack = [];
    let boxes = Array.from({length : order.length}, (_, i) => order.length - i);
    let i = 0;
    while (i < order.length){
        if (order[i] === boxes[boxes.length - 1]){
            answer++;
            boxes.pop();
            i++;
        } else if (order[i] === stack[stack.length - 1]){
            answer++;
            stack.pop();
            i++;
        } else if (boxes.length) {
            stack.push(boxes[boxes.length - 1]);
            boxes.pop();
        } else break;
    }
    return answer;
}