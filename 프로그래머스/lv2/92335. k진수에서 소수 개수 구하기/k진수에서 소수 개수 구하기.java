import java.util.*;
class Solution {
    public int solution(int n, int k) {
        int answer = 0;
		String bin = Integer.toString(n, k);
		String[] arr = bin.split("0");
		for(int i = 0; i < arr.length; i ++) {
			if(isPrimeNumber(arr[i])) {
				answer++;
			}
		}
        return answer;
    }
    public boolean isPrimeNumber(String num) {
		if(num.isEmpty()) return false;
		Long number = Long.parseLong(num);
		if(number == 1) return false;
		for(long i = 2; i <= Math.sqrt(number); i++) {
			if(number % i == 0) return false;
		}
		return true;
	}
}