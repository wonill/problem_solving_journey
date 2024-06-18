function solution(s){
   let n = 0;
   for(let ch of s){
       if (ch == 'p' || ch == 'P') n++;
       if (ch == 'y' || ch == 'Y') n--;
   }

    return n === 0;
}