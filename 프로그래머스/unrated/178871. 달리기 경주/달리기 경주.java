import java.util.HashMap;

class Solution {
    public String[] solution(String[] players, String[] callings) {
        String[] answer = {};
        HashMap<String , Integer> playersMap = new HashMap<String, Integer>();
		
		for(int i = 0; i < players.length; i++) {
			playersMap.put(players[i], i);
		}
		
		for(int i = 0; i < callings.length; i++) {
			int playerNum = playersMap.get(callings[i]);
			
			if(playerNum != 0) {
				playersMap.put(players[playerNum], playerNum - 1);
				playersMap.put(players[playerNum - 1], playerNum);
				
				String tmp = players[playerNum];
				players[playerNum] = players[playerNum - 1];
				players[playerNum - 1] = tmp;
				
				
				
			}
			

		}
		
		answer = players;
        return answer;
    }
}