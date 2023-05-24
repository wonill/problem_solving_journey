import java.util.*;
class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        int[] stack = new int[ingredient.length];
		int idx = 0;
		for(int i = 0; i < ingredient.length; i++) {
			stack[idx] = ingredient[i];
			if(idx >= 3 && stack[idx] == 1  && 
					stack[idx-1] == 3 && 
					stack[idx-2] == 2 && 
					stack[idx-3] == 1) {
				idx -= 3; answer++;
			} else {
				idx++;
			}
		}
        return answer;
    }
}