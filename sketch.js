const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var angle=60;
function setup() {
    createCanvas(400,400);
    engine=Engine.create();
   world=engine.world;

   var ball_options={
       restitution:0.95,
       frictionAir:0.01,
   }
   bt1=createImg("up.png");
   bt1.position(20,30);
   bt1.size(50,50);
   bt1.mouseClicked(force);
   var ground_options={
       isStatic:true
   }
   ball=Bodies.circle(100,10,20,ball_options);
   World.add(world,ball);
   ground=Bodies.rectangle(0,370,400,20,ground_options);
   World.add(world,ground);
}

function draw() 
{
  background("lightblue");
  Engine.update(engine);
  Matter.Body.rotate(ball,angle);
  push();
  translate(ball.position.x,ball.position.y);
  rotate(angle);
  pop();
  angle+=0.1;
  fill("pink");
  ellipse(ball.position.x,ball.position.y,20);
  fill("lightgreen");
  rect(ground.position.x,ground.position.y,400,20);
}

function force() {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}