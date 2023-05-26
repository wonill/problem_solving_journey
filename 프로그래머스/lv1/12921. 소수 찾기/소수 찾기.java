import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
class Solution {
    public int solution(int n) {
        int answer = n-1;
        List<Integer> prime_numbers = new ArrayList<>();
        prime_numbers.add(2);
        int[] numbers = new int[n];
        loop :
        for(int i = 3; i <= n; i++) {
        	for(int prime_number : prime_numbers) {
        		if(i % prime_number == 0) {
        			answer--;
        			continue loop;
        		}
        		if(prime_number > Math.sqrt(n)) {
        			break;
        		}
        	}
        	prime_numbers.add(i);
        }
        return answer;
    }
}