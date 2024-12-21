function solution(s) {
    var answer = s.length;
    let stack = [];
    for (let len = 1; len <= s.length / 2; len++) {
        let count = 0;
        for (let i = 0; i < s.length; i += len) {   
          let target = s.slice(i, i + len);
          let repeatCount = 1;
          while (target === stack[stack.length - 1]) {
             repeatCount++;
             i += len;
             target = s.slice(i, i + len); 
          }
          count += repeatCount > 1 ? target.length + repeatCount.toString().length : target.length;
          if (target) stack.push(target);
        }
        // console.log(count);
        answer = Math.min(answer, count);
    }
    return answer;
}