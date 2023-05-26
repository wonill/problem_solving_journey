import java.util.*;
class Solution {
    public String[] solution(String[] strings, int n) {
        String[] answer = new String[strings.length];
		char[] chs = new char[strings.length];
		int[] origin_idx = new int[strings.length];
		Arrays.sort(strings);
		for(int i = 0; i < strings.length; i++) {
			chs[i] = strings[i].charAt(n);
			origin_idx[i] = i;
		}
		for(int i = 0; i < chs.length-1; i++) {
			for(int j = 0; j < chs.length-i-1; j++) {
				if(chs[j] > chs[j+1]) {
					char tmp = chs[j];
					chs[j] = chs[j+1];
					chs[j+1] = tmp;
					
					int tmp2 = origin_idx[j];
					origin_idx[j] = origin_idx[j+1];
					origin_idx[j+1] = tmp2;
				}
			}
		}
		for(int i = 0; i < strings.length; i++) {
			answer[i] = strings[origin_idx[i]];
		}
        return answer;
    }
}