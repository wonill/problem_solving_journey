function solution(n, w, num) {
    let answer = 0;
    let count = 0;
    let row = 0;
    const boxes = Array.from({length: Math.ceil(n / w)}, (_, i) => row++ % 2 === 0 ? Array.from({length: w}, () => ++count) : Array.from({length: w}, () => ++count).reverse()
    );
    const targetRow = Math.ceil(num / w) - 1;
    const targetCol = boxes[targetRow].findIndex((v) => v === num)
    const isEmpty = boxes.at(-1)[targetCol] > n;
    
    return isEmpty ? boxes.length - targetRow - 1 : boxes.length - targetRow;
}