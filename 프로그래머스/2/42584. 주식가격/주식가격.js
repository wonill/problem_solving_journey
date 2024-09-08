class Queue{
    constructor(arr){
        this.items = {};
        for (let i = 0; i < arr.length; i++){
            this.items[i] = arr[i];
        }
        this.headIndex = 0;
        this.tailIndex = arr.length;
    }
    
    enqueue(item){
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    
    dequeue(){
        if (this.tailIndex > this.headIndex){
           let item = this.items[this.headIndex];
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
    
    get(i){
        return this.items[this.headIndex + i];
    }
}

function solution(prices) {
    let answer = [];
    let queue = new Queue(prices);
    let price;
    while (price = queue.dequeue()){
        let cnt = 0;
        let len = queue.getLength();
        for (let i = 0; i < len; i++){
            cnt++;
            if (price > queue.get(i)) break;
        }
        answer.push(cnt);
    }
    return answer;
}

