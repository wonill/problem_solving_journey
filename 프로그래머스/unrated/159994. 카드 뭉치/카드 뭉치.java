class Solution {
    public String solution(String[] cards1, String[] cards2, String[] goal) {
        String answer = "";
        int cards1_index = 0;
        int cards2_index = 0;
        for(int i = 0; i < goal.length; i++){
            if(cards1_index < cards1.length && goal[i].equals(cards1[cards1_index])){
                cards1_index++;
            } else if(cards2_index < cards2.length && goal[i].equals(cards2[cards2_index])){
                cards2_index++;
            } else {
                return "No";
            }
            
        }
        answer = "Yes";
        return answer;
    }
}