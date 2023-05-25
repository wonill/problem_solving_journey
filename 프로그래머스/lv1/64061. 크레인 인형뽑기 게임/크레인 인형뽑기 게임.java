import java.util.*;
class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        Stack<Integer> basket = new Stack<>();
        for(int i = 0; i < moves.length; i++) {
        	for(int j = 0; j < board.length; j++) {
        		if(board[j][moves[i]-1] != 0) {
        			basket.push(board[j][moves[i]-1]);
        			board[j][moves[i]-1] = 0; 
        			break;
        		}
        	}
        	if(basket.size() > 1 && basket.get(basket.size()-1) == basket.get(basket.size()-2)) {
        		basket.pop();basket.pop();
        		answer+=2;
        	}
        }
        return answer;
    }
}