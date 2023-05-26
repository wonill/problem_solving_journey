import java.util.*;
class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        Arrays.sort(nums);
        List<Integer> prime_numbers = new ArrayList<>();
        prime_numbers.add(2);
        int max = nums[nums.length-1]+nums[nums.length-2]+nums[nums.length-3];
        loop:
        for(int i = 3; i <= max; i++) {
        	for(int prime_number : prime_numbers) {
        		if(i % prime_number == 0) {
        			continue loop;
        		}
        		if(prime_number > Math.sqrt(max)) {
        			break;
        		}
        	}
        	prime_numbers.add(i);
        }
        for(int i = 0; i < nums.length-2; i++) {
        	for(int j = i+1; j < nums.length-1; j++) {
        		for(int k = j+1; k < nums.length; k++) {
        			int sum = nums[i] + nums[j] + nums[k];
        			if(prime_numbers.contains(sum)) {
        				answer++;
        			}
        		}
        	}
        }
        return answer;
    }
}