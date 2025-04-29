function solution(points, routes) {
    let crashes = 0;
    
    class Robot {
        id;
        position;
        route;
        point = 1;
        arrived = false;
        constructor(id ,position, route){
            this.id = id;
            this.position = [...position];
            this.route = route;
        }
        
        move(){
            if (this.position[0] < this.route[this.point][0]) this.position[0]++;
            else if (this.position[0] > this.route[this.point][0]) this.position[0]--;
            else if (this.position[1] < this.route[this.point][1]) this.position[1]++;
            else if (this.position[1] > this.route[this.point][1]) this.position[1]--;
            
            if (this.position[0] === this.route[this.point][0] 
                && this.position[1] === this.route[this.point][1]) this.point++;
            
            if (!this.route[this.point]) this.arrived = true;
        }
    }
    
    const robots = [];
    routes.forEach((route, i) => {
        robots.push(new Robot(i + 1, points[route[0] - 1], routes[i].map(v => points[v - 1])));
    })
    
    let time = 0;
    let map = new Map();
    robots.forEach((robot) => {
        map.set(robot.position.join(','), (map.get(robot.position.join(',')) || 0) + 1);
    })
    crashes += [...map.values()].filter(v => v >= 2).length;
    
    while (robots.some(robot => !robot.arrived)) {
        let map = new Map()
        robots.forEach((robot) => {
            if (!robot.arrived){
                robot.move();
                map.set(robot.position.join(','), (map.get(robot.position.join(',')) || 0) + 1);
            }
        })
        crashes += [...map.values()].filter(v => v >= 2).length;
        time++;
    }
    
    return crashes;
}