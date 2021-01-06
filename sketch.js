const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particle = [];
var plinko = [];
var division = [];

var divisionheight = 300;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height,width,20);
    for(i = 0 ; i<=width; i = i+80)
    {
      division.push(new Division(i,height-divisionheight/2,10,divisionheight));
    }

    for(i = 40 ; i<width -10; i = i+50)
    {
      plinko.push(new Plinko(i,60));
    }

    for(i = 35 ; i<width -10; i = i+50)
    {
      plinko.push(new Plinko(i,120));
    }
    for(i = 10 ; i<width -10; i = i+50)
    {
      plinko.push(new Plinko(i,180));
    }
    for(i = 45 ; i<width -10; i = i+50)
    {
      plinko.push(new Plinko(i,240));
    }
    for(i = 55 ; i<width -10; i = i+50)
    {
      plinko.push(new Plinko(i,300));
    }
    for(i = 5 ; i<width -10; i = i+50)
    {
      plinko.push(new Plinko(i,360));
    }
    for(i = 0 ; i<width -10; i = i+50)
    {
      plinko.push(new Plinko(i,420));
    }
}

function draw(){
    background(0);
    Engine.update(engine);  

    ground.display();
    Spawnparticle();
    for(i = 0 ; i<division.length; i++)
    {
      division[i].display();
    }
    for(i = 0 ; i<plinko.length; i++)
    {
      plinko[i].display();
    }
    for(i = 0 ; i<particle.length; i++)
    {
      particle[i].display();
    }
}


function Spawnparticle()
{
  if(frameCount % 90 === 0)
  {
    particle.push(new Particle(random(width/2-10,width/2+10),10));
  }
}
