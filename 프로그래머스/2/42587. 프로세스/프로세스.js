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
        if (this.headIndex < this.tailIndex){
            const item = this.items[this.headIndex];
            delete this.items[this.headIndex];
            this.headIndex++;
            return item;
        }
    }
    
    peek(){
        return this.items[this.headIndex];
    }
    
    getLength(){
        return this.tailIndex - this.headIndex;
    }
}

function solution(priorities, location) {
    let answer = 0;
    let locationQueue = new Queue();
    let priorityQueue = new Queue();
    for (let i = 0; i < priorities.length; i++){
        locationQueue.enqueue(i);
        priorityQueue.enqueue(priorities[i]);
    }
    priorities.sort((a, b) => b - a);
    for (let i = 0; i < priorities.length;){
        let process = priorityQueue.dequeue();
        let loc = locationQueue.dequeue();
        if (process != priorities[i]){
            priorityQueue.enqueue(process);
            locationQueue.enqueue(loc);
        } else {
            answer++;
            i++;
            if (loc === location) break;
        }
    }
    return answer;
}