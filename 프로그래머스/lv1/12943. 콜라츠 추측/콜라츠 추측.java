class Solution {
    public int solution(long num) {
        int answer = 0;
        
        while(true){
           if(num == 1){
               break;
           }
           if(answer == 500){
               return -1;
           } 
            
           num = num % 2 == 0? num/2 : num*3+1;
           answer++; 
            
        }
        return answer;
    }
}