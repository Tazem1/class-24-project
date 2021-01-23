class Paper {
    constructor() {
      var options = {
          
      }
      this.body = Bodies.circle(100,350, 40, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, 40,40);
      
    }
  };
  