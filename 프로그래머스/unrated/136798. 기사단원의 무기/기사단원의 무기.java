class Solution {
    public int solution(int number, int limit, int power) {
        int answer = 1;
		if(number == 1) {
			return 1;
		}
		
		for(int i = 2; i <= number; ++i) {
			int numOfDivisor = 0;
			for(int j = 1; j < Math.sqrt(i); j++) {
				if(i % j == 0) {
					numOfDivisor += 2;
				}
			}
			
			if(isInteger(Math.sqrt(i))) {
				numOfDivisor++;
			}
			
			answer += numOfDivisor > limit ? power : numOfDivisor;
		}
        return answer;
    }
    
    public boolean isInteger(double num) {
		return num == (int)num;
	}
}