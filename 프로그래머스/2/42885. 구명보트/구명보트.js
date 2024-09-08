function solution(people, limit) {
    people.sort((a, b) => a - b);
    for (var i = 0, j = people.length; i < --j;) {
      if (people[i] + people[j] <= limit) i++;
    }
    return people.length - i;
  }
  
