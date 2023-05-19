class Solution {
    public String solution(String s) {
        String answer = "";
      String[] arr = s.split(" ");	
		
		int index = 0;
		for(int i = 0; i < s.length(); i++) {
			
			if(i != 0 && s.charAt(i - 1) == ' ') {
				index = 0;
			}
			
			answer += index++ % 2 == 0? Character.toUpperCase(s.charAt(i)) : Character.toLowerCase(s.charAt(i));
		}
		
        return answer;
    }
}