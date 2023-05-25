import java.util.*;
class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
		int[] numOfSuit = new int[n];
		Arrays.fill(numOfSuit, 1);
		Arrays.sort(lost);
		Arrays.sort(reserve);
		for(int l : lost) {
			numOfSuit[l-1]--;
		}
		loop:
		for(int r : reserve) {
			for(int l : lost) {
				if(r == l) {
					numOfSuit[r-1]++;
					continue loop;
				}
			}
			
			if(r > 1 && numOfSuit[r-2] == 0) {
				numOfSuit[r-2]++;
				continue;
			}
			if(r < n && numOfSuit[r] == 0) {
				numOfSuit[r]++;
			}
		}
		for(int num : numOfSuit) {
			if(num > 0) {
				answer++;
			}
		}
        return answer;
    }
}