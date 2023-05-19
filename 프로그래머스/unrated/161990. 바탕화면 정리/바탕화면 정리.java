import java.util.*;

class Solution {
    public int[] solution(String[] wallpaper) {
       List<Integer> lowList = new ArrayList<>();
		List<Integer> columnList = new ArrayList<>();
		
		for(int i = 0; i < wallpaper.length; i++) {
			if(wallpaper[i].contains("#")) {
				lowList.add(i);
				columnList.add(wallpaper[i].lastIndexOf("#")); 				
				columnList.add(wallpaper[i].indexOf("#")); 				
			}
			
		}
		
		return new int[] {Collections.min(lowList), 
				Collections.min(columnList), 
				Collections.max(lowList) + 1, 
				Collections.max(columnList) + 1};
    }
}