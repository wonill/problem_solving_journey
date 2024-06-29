function solution(arr, intervals) {
   let result = [];
   for (let interval of intervals){
       result.push(...arr.slice(interval[0], interval[1] + 1));
   }
   return result;
}