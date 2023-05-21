class Solution {
    public int solution(int n) {
        int answer = 0;
        int i = 1;
		
		while(true) {
			if(i*(i+1)/2 > n) {
				break;
			}
			
			if(i % 2 == 1 && n % i == 0) {
				System.out.println(i);
				answer++;
			} else if(i % 2 == 0 && n % i == i/2){
				System.out.println(i);
				answer++;
			}
			
			i++;
		}
        return answer;
    }
}