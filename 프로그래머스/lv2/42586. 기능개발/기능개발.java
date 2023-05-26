import java.util.*;
class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        int[] answer = {};
        List<Integer> ansList = new ArrayList<>(); 
		int order = 0;
		int cnt = 0;
		while(order != progresses.length) {
			for(int i = 0; i <progresses.length; i++) {
				progresses[i] += speeds[i];
			}
			
			if(progresses[order] >= 100) {
				while(true) {
					order++;
					cnt++;
					if(order == progresses.length || progresses[order] < 100) {
						ansList.add(cnt);
						cnt = 0;
						break;
					}
				}
			}			
		}
		answer = new int[ansList.size()];
		for(int i = 0; i < ansList.size(); i++) {
			answer[i] = ansList.get(i);
		}
        return answer;
    }
}