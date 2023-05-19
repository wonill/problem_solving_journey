
import java.util.*;
class Solution {
    public String solution(String[] survey, int[] choices) {
        String answer = "";
        
        Map<Character, Integer> typeMap = new HashMap<>();	
		
		for(int i = 0; i < survey.length; i++) {
			if(choices[i] > 4) {
				typeMap.put(survey[i].charAt(1), typeMap.getOrDefault(survey[i].charAt(1), 0) + (choices[i] -               4));
			} else if(choices[i] < 4){
				typeMap.put(survey[i].charAt(0), typeMap.getOrDefault(survey[i].charAt(0), 0) + (4 - choices                 [i]));
			}
		}
		
		
		answer += typeMap.getOrDefault('R', 0) < typeMap.getOrDefault('T', 0) ? 'T' : 'R';
		answer += typeMap.getOrDefault('C', 0) < typeMap.getOrDefault('F', 0) ? 'F' : 'C';
		answer += typeMap.getOrDefault('J', 0) < typeMap.getOrDefault('M', 0) ? 'M' : 'J';
		answer += typeMap.getOrDefault('A', 0) < typeMap.getOrDefault('N', 0) ? 'N' : 'A';
        
        return answer;
    }
}