function solution(n, w, num) {
    let count = 0;
    let row = 0;
    const boxes = Array.from({length: Math.ceil(n / w)}, (_, i) => {
      const rowArr = Array.from({length: w}, () => ++count);
      return row++ % 2 === 0 ? rowArr : rowArr.reverse(); 
    });
    const targetRow = Math.ceil(num / w) - 1;
    const targetCol = boxes[targetRow].findIndex((v) => v === num)
    const isEmpty = boxes.at(-1)[targetCol] > n;
    
    return isEmpty ? boxes.length - targetRow - 1 : boxes.length - targetRow;
}