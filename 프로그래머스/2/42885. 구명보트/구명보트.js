const solution=(p,limit)=>p.length-p.sort((a,b)=>b-a).reduce((a,c,i)=>a+(c+p[p.length-a-1]<=limit&&i<p.length-a-1),0);
