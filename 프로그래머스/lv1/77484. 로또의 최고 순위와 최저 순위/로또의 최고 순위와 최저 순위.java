import java.util.*;
class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int[] answer = new int[2];
		
		List<Integer> pick = new ArrayList<>();
		
		int numOfZero = 0;
		
		for(int i = 0; i < lottos.length; i++) {
			if(lottos[i] != 0) {
				pick.add(lottos[i]);
				continue;
			}
			numOfZero++;
		}
		
		int min_win = 0;
		
		for(int i = 0; i < win_nums.length; i++) {
			if(pick.contains(win_nums[i])) {
				min_win++;
				if(pick.size() == min_win) {
					break;
				}
			}
		}
		
		int max_win = min_win + numOfZero;
		
		
		answer[0] = max_win <= 1 ? 6 : 7 - max_win;
		answer[1] = min_win <= 1 ? 6 : 7 - min_win;
        return answer;
    }
}