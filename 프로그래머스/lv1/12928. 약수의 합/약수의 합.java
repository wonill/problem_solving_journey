class Solution {
    public int solution(int n) {
        int answer = 0;
        
        if(n == 0){
            return 0;
        }
        
        double middleNum = Math.sqrt(n);
		
		for(int i = 1; i < middleNum; i++) {
			if(n%i == 0) {
				answer += i;
				answer += n/i;
			}
		}
		
		if(isInteger(middleNum)) {
			answer += middleNum;
		}
        return answer;
    }
    
    public boolean isInteger(double num){
        return num == (int)num;
    }
}