class Queue {
    constructor(){
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(item){
        this.items[this.rear]  = item;
        this.rear++;
    }
    
    dequeue(){
        if (this.front < this.rear) {
            const item = this.items[this.front];
            delete this.items[this.front];
            this.front++;
            return item;
        }
    }
    
    getLength(){
        return this.rear - this.front;
    }
}

function solution(sequence, k){
    let start = 0;
    let end = 0;
    let total = sequence[0];
    let len = sequence.length;
    const possibleAnswers = [];

    while (start < sequence.length && end < sequence.length){     
        if (total < k){
            end++;
            total += sequence[end];
            continue;
        } else if (total === k){
            possibleAnswers.push([start, end]);
            total -= sequence[start];
            start++;
        } else {
            total -= sequence[start];
            start++;
        }
    }
   possibleAnswers.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))
   return possibleAnswers[0]
}