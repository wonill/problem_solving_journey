class Queue{
    constructor(){
        this.items = {};
        this.tailIndex = 0;
        this.headIndex = 0;
        this.total = 0;
    }
    
    enqueue(item){
        this.items[this.tailIndex] = item;
        this.tailIndex++;
        this.total += item;
    }
    
    dequeue(){
        if (this.headIndex < this.tailIndex){
         const item = this.items[this.headIndex];
         this.total -= item;
         delete this.items[this.headIndex];
         this.headIndex++;
         return item;   
        }
    }
    
    getLength(){
        return this.tailIndex - this.headIndex;
    }
}

function solution(sequence, k) {
    let partialSequences = [];
    let queue = new Queue();
    for (let i = 0; i < sequence.length; i++){
        queue.enqueue(sequence[i]);
        while (queue.total > k){
            queue.dequeue();
        }
        if (queue.total === k) {
            partialSequences.push([queue.headIndex, queue.tailIndex - 1]);
            queue.dequeue();
        }
    }
    partialSequences.sort((a, b) =>{
       if ((a[1] - a[0]) == (b[1] - b[0])) return a[0] - b[0];
       return (a[1] - a[0]) - (b[1] - b[0]);
    });
    return partialSequences[0];
}