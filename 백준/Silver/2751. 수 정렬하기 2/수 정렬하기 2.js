let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);

let arr = input.filter((_, i) => i > 0).map(Number);

let sorted = Array(arr.length).fill(0);

function merge(arr, start, mid, end){
    let i = start;
    let j = mid + 1;
    let k = start;

    while(i <= mid && j <= end){
        if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
        else sorted[k++] = arr[j++];
    }

    while (i <= mid) sorted[k++] = arr[i++];
    while (j <= end) sorted[k++] = arr[j++];

    for (let m = start; m <= end; m++){
        arr[m] = sorted[m];
    }
}


function mergeSort(arr, start, end){
    if (start < end){
        let mid = parseInt((start + end) / 2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}

mergeSort(arr, 0, arr.length - 1);
let answer = '';
for (let i = 0; i < arr.length; i++){
    answer += arr[i] + '\n';
}
console.log(answer);