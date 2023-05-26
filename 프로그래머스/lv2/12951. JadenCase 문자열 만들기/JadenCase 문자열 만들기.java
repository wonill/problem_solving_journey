class Solution {
    public String solution(String s) {
        String[] words = s.split(" ");
        for(int i = 0; i < words.length; i++) {
        	if(!words[i].isBlank()) {
        		words[i] = words[i].length() == 1 ? 
        				words[i].substring(0,1).toUpperCase() : 
        					words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();   
        	}	
        }
        String sentence = String.join(" ", words);
        int blank = s.length() - sentence.length();
        for(int i = 0; i < blank; i++) {
        	sentence += " ";
        }
        return sentence;
    }
}