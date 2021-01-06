class Plinko {
    constructor(x,y,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(255);
        ellipse(0,0,20,20);
        pop();
    }
  }
