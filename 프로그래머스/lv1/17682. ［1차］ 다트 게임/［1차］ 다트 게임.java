import java.util.*;
class Solution {
    public int solution(String dartResult) {
        int answer = 0;
        int cur_score = 0;
		int stage = 0;
		
		List<Integer> scoreList = new ArrayList<>();
		
		for(int i = 0; i < dartResult.length(); i++) {			
			
			char dart = dartResult.charAt(i);
			
			if(Character.isDigit(dart)) {
				
				if(i != 0) {
					stage++;
					scoreList.add(cur_score);
				}
				
				if(dart == '1' && dartResult.charAt(i+1) == '0'){
					
					cur_score = 10;
					i++;
				} else {
					cur_score = dart - '0';
				}
				
			}
			
			if(dart == 'D') {
				cur_score *= cur_score;
			}
			
			if(dart == 'T') {
				cur_score *= cur_score*cur_score;
			}
			
			if(dart == '#') {
				cur_score *= -1;
			}
			
			if(dart == '*') {
				cur_score *= 2;
				if(stage != 0) {
					scoreList.set(stage-1, scoreList.get(stage-1)*2);
				}
					
			}
			
			
		}
		
		scoreList.add(cur_score);
		
		for(Integer score :scoreList) {
			System.out.println(score);
			answer += score;
		}
        return answer;
    }
}