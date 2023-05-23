import java.util.*;
class Solution {
    public String solution(String s, String skip, int index) {
        StringBuilder answer = new StringBuilder();
		
		for(char letter : s.toCharArray()) {
			//char temp = letter;
			int idx = 0;
			while(idx < index) {
				letter = letter == 'z' ? 'a' : (char)(letter + 1);
				if(!skip.contains(String.valueOf(letter))) {
					idx += 1;
				}
			}
			answer.append(letter);
		}
		
		
		return answer.toString();
    }
}