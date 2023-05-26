import java.util.*;
class Solution {
    public int solution(String[] want, int[] number, String[] discount) {
        int answer = 0;
        for(int i = 0; i < discount.length-9; i++) {
        	Map<String, Integer> wantMap = new HashMap<>();
        	for(int j = 0; j < want.length; j++) {
        		wantMap.put(want[j], number[j]);
        	}
        	for(int j = i; j < i + 10; j++) {
        		if(wantMap.containsKey(discount[j])) {
        			wantMap.put(discount[j], wantMap.get(discount[j])-1);
        		}
        	}
        	answer++;
        	for(String key : wantMap.keySet()) {
        		if(wantMap.get(key) != 0) {
        			answer--;
        			break;
        		}
        	}
        }
        return answer;
    }
}