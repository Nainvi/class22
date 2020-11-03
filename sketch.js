const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine,world,box,ball,ground;
function setup(){
createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var ground_options={isStatic:true}
ground=Bodies.rectangle(200,380,400,20,ground_options);
World.add(world,ground)
box=Bodies.rectangle(100,200,50,50);
World.add(world,box);
var ball_options={restitution:0.8}
ball=Bodies.circle(300,200,20,ball_options);
World.add(world,ball)
}
function draw(){
  background(0);
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  fill("white");
  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}