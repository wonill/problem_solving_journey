class Queue {
    
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
    
    peek(){
        return this.items[this.headIndex];
    }
    
    getLength(){
        return this.tailIndex - this.headIndex;
    }
    
    getTotal(){
        let total = 0;
        if (this.tailIndex > this.headIndex){
            for (let i = this.headIndex; i < this.tailIndex; i++){
                total += this.items[i];
            }
        }
        return total;
    }
    
    move(){
        for (let i = this.headIndex; i < this.tailIndex; i++){
            this.items[i]--;
        }
    }
    
    isEmpty(){
        return this.headIndex === this.tailIndex;
    }
}

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = new Queue();
    let remainTimes = new Queue();
    
    truck_weights.reverse();
    while(1){
        if (remainTimes.peek() === 0) {
            bridge.dequeue();
            remainTimes.dequeue();
            if (!truck_weights.length && bridge.isEmpty()) break;
        }
        if (truck_weights.length && bridge.getLength() < bridge_length 
            && bridge.getTotal() + truck_weights[truck_weights.length - 1] <= weight) {
            const depart = truck_weights.pop();
            bridge.enqueue(depart);
            remainTimes.enqueue(bridge_length);
        }
        remainTimes.move();
        answer++;
    }
    return answer + 1;
}