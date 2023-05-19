class Solution {
    public int[] solution(String[] park, String[] routes) {
        int[] answer = {0, 0};
		
		int[] startIndex = {0 ,0};
		
		loop :
		for(int i = 0; i < park.length; i++) {
			for(int j = 0; j < park[0].length(); j++) {
				if(park[i].charAt(j) == 'S') {
					
					break loop;
				} else {
					startIndex[1]++;
				}
			}
			startIndex[1] = 0;
			startIndex[0]++;
		}
		
		loop2 :
		for(int i = 0; i < routes.length; i++) {
			int distance = routes[i].charAt(2) - 48;
			
			if(routes[i].charAt(0) == 'E') {
				
				if(startIndex[1] + distance >= park[startIndex[0]].length()) {
					continue loop2;
				}
				
				for(int j = 1; j <= distance; j++) {
					if(park[startIndex[0]].charAt(startIndex[1] + j) == 'X') {
						continue loop2;
					}
				}
				
				startIndex[1] += distance;

			} else if(routes[i].charAt(0) == 'W') {

				if(startIndex[1] - distance < 0) {
					continue loop2;
				}
				
				for(int j = 1; j <= distance; j++) {
					if(park[startIndex[0]].charAt(startIndex[1] - j) == 'X') {
						continue loop2;
					}
				}
				
				startIndex[1] -= distance;
				
				

			} else if(routes[i].charAt(0) == 'N') {
				
				if(startIndex[0] - distance < 0) {
					continue loop2;
				}
				
				for(int j = 1; j <= distance; j++) {
					if(park[startIndex[0] - j].charAt(startIndex[1]) == 'X') {
						continue loop2;
					}
				}
				
				startIndex[0] -= distance;

			} else if(routes[i].charAt(0) == 'S') {
				
				if(startIndex[0] + distance >= park.length) {
					continue loop2;
				}
				
				for(int j = 1; j <= distance; j++) {
					if(park[startIndex[0] + j].charAt(startIndex[1]) == 'X') {
						
						continue loop2;
					}
				}
				
				startIndex[0] += distance;
				
			}
			
		
		}
		
		answer = startIndex;
		
        return answer;
    }
}