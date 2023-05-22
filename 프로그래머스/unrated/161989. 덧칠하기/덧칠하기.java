class Solution {
    public int solution(int n, int m, int[] section) {
        int answer = 0;int location = 0;
		for(int i = 0; i < section.length; i++) {
			if(location + 1 > section[i]) {
				continue;
			}
			if(section[i] + m - 1 <= n) {
				answer++;
				location = section[i] + m -1;
			} else {
				answer++;
				break;
			}
		}
        return answer;
    }
}