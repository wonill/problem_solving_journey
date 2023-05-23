import java.util.*;
class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];
		
		Map<Character, Integer> min_keymap = new HashMap<>();
		
		for(int i = 0; i < keymap.length; i++) {
			for(int j = 0; j < keymap[i].length(); j++) {
				char key = keymap[i].charAt(j);
				if(min_keymap.get(key) == null || min_keymap.get(key) > j+1) {			
					min_keymap.put(key, j+1);
				}
			}
		}
		
		loop :
		for(int i = 0; i < targets.length; i++) {
			for(int j = 0; j < targets[i].length(); j++) {
				
				if(min_keymap.get(targets[i].charAt(j)) == null) {
					answer[i] = -1;
					continue loop;
				}
				
				answer[i] += min_keymap.get(targets[i].charAt(j));
			}
		}
        return answer;
    }
}