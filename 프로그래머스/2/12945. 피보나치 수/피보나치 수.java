class Solution {
   int count = 0;
    public int solution(int n) { 
        if(n==0) return 0;
        if(n==1) return 1;
            n = solution(1,0,n);
            return n%1234567;
    }

    public int solution(int sum,int num2, int number) {    
        count++;
        int sum2 = (sum + num2) % 1234567;        
        sum = num2;        
        if(count == number){
            count = 0;
            return sum2;
        }        
        return solution(sum,sum2,number);
    }
}