import java.util.*;
class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];
		String[] map1 = getMap(n, arr1);
		String[] map2 = getMap(n, arr2);

		Arrays.fill(answer, "");

		for(int i = 0; i < n; i++) {
			for(int j = 0; j < n; j++) {
				if(map1[i].charAt(j) == '1' || map2[i].charAt(j) == '1') {
					answer[i] += "#";
				} else {
					answer[i] += " ";
				}
			}
		}
        return answer;
    }
    
    public String[] getMap(int n, int[] arr) {
		String[] map = new String[n]; 

		for(int i = 0; i < n; i++) {
			map[i] = Integer.toBinaryString(arr[i]);
			while(map[i].length() < n) {
				map[i] = "0" + map[i];
			}
		}
		return map;
	}
}