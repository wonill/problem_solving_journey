import java.util.*;
class Solution {
    boolean solution(String s) {
      int cnt = 0;
		for(char ch : s.toCharArray()) {
			cnt += ch == '(' ? 1 : -1;
			if(cnt == -1) {
				return false;
			}
		}
        return cnt == 0;
    }
}