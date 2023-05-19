import java.util.Map;
import java.util.HashMap;
class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = {0, 0};
		
		Map<String, Boolean> wordMap = new HashMap<>();
		
		for(int i = 0; i < words.length; i++) {
            if(words[i].length() == 1) {
				answer[0] = i%n+1;
				answer[1] = i/n+1;
                break;
			}
            
			if(wordMap.containsKey(words[i])) {
				answer[0] = i%n+1;
				answer[1] = i/n+1;
                break;
			}
			
			wordMap.put(words[i], true);		
			
			if(i == 0) {
				continue;
			}
			
			if(words[i-1].charAt(words[i-1].length() - 1) != words[i].charAt(0)){
				answer[0] = i%n+1;
				answer[1] = i/n+1;
                break;
			}
		}
		
		return answer;
    }
}