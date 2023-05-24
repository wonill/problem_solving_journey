class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        String[] validWords = {"aya", "ye", "woo", "ma"};
		for(String word : babbling) {
			String pre_word = "";
			while(true) {
				if(word.length() <= 3) {
					if(word.equals("aya") || word.equals("ye") || word.equals("woo") || word.equals("ma")) {
						if(!word.equals(pre_word)) {
							answer++;							
						}
						break;
					} else {
						break;
					}
				}
				
				if(word.substring(0,3).equals("aya") && !pre_word.equals("aya")) {
					pre_word = "aya";
					word = word.substring(3);
				} else if(word.substring(0,2).equals("ye") && !pre_word.equals("ye")) {
					pre_word = "ye";
					word = word.substring(2);
				} else if(word.substring(0, 3).equals("woo") && !pre_word.equals("woo")) {
					pre_word = "woo";
					word = word.substring(3);
				} else if(word.substring(0, 2).equals("ma") && !pre_word.equals("ma")) {
					pre_word = "ma";
					word = word.substring(2);
				} else {
					break;
				}
			}
			
		}
        return answer;
    }
}