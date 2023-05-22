class Solution {
    public int solution(int n, int m, int[] section) {
        int answer = 1;
        int location = section[0];
        for(int i = 1; i < section.length; i++) {
			if(location + m - 1 < section[i]) {
				answer++;
                location = section[i];
			}
		}
        return answer;
    }
}