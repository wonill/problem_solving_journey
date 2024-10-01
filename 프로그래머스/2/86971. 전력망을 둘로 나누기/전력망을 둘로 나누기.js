class Queue{
    constructor(){
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    
    enqueue(item){
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    
    dequeue(){
        if (this.tailIndex > this.headIndex){
            const item = this.items[this.headIndex];
            delete this.items[this.headIndex];
            this.headIndex++;
            return item;
        }
    }
    
    getLength(){
        return this.tailIndex - this.headIndex;
    }
}

const calculateConnectedNodes = (n, wires, disconnected) => {
    let graph = Array.from({length : n + 1},  (_, i) => [i]);
    let visited = new Set();
    
    wires.forEach((wire, i) => {
        if (i === disconnected) return;
        graph[wire[0]].push(wire[1]);
        graph[wire[1]].push(wire[0]);
    })
        
    let queue = new Queue();
    queue.enqueue(1);
    visited.add(1);
    
    while (queue.getLength()){
        const node = queue.dequeue();
        
        for (let i of graph[node]) {
            if (!visited.has(i)){
                visited.add(i);
                queue.enqueue(i);
            }
        }
    }
    
    return [visited.size, n - visited.size];
}

function solution(n, wires) {
    var answer = 101;
    for (let i = 0; i < wires.length; i++){
        const [network1, network2] = calculateConnectedNodes(n, wires, i);
        const result = Math.abs(network1 - network2);
        answer = result < answer ? result : answer;
    }
    return answer;
}