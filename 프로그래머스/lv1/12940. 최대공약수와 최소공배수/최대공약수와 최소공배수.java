class Solution {
    public long[] solution(long n, long m) {
        long[] answer = new long[2];
        for(int i = 1; i <= Math.min(n, m); i ++) {
        	if(n%i==0 && m%i==0) answer[0] = i;
        }
        long multiple = Math.max(n, m);
        for(int i = 1; i <= Math.min(n, m); i++) {
        	multiple = Math.max(n, m)*i;
        	if(multiple%Math.min(n, m) == 0) {
        		answer[1] = multiple;
        		break;
        	}
        }
        return answer;
    }
}