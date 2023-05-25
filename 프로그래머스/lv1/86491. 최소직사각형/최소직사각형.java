class Solution {
    public int solution(int[][] sizes) {
        int answer = 0;
        int max_row = 0;
        int max_column = 0;
        
        for(int i = 0; i < sizes.length; i++) {
        	if(sizes[i][0] > sizes[max_row][0]) {
        		max_row = i;
        	}
        	if(sizes[i][1] > sizes[max_column][1]) {
        		max_column = i;
        	}     	
        }
        
        answer = sizes[max_row][0] > sizes[max_column][1] ? sizes[max_row][0] : sizes[max_column][1];
        int max_idx = sizes[max_row][0] > sizes[max_column][1] ? max_column : max_row;
        int search_idx = sizes[max_row][0] > sizes[max_column][1] ? 1 : 0;
        int opposite_idx = Math.abs(search_idx-1);
        
        while(sizes[max_idx][search_idx] > sizes[max_idx][opposite_idx]) {
        	int tmp = sizes[max_idx][search_idx];
        	sizes[max_idx][search_idx] = sizes[max_idx][opposite_idx];
        	sizes[max_idx][opposite_idx] = tmp;
        	
        	max_idx = 0;
        	for(int i = 0; i < sizes.length; i++) {
        		if(sizes[i][search_idx] > sizes[max_idx][search_idx]) {
        			max_idx = i;
        		}
        	}
        }
        
        return answer*sizes[max_idx][search_idx];
    }
}