
const Engine = Matter.Engine;//Create namespace for Engine
const World = Matter.World;//Create namespace for World
const Bodies = Matter.Bodies;//Create namespace for Bodies
const Body = Matter.Body;//Create namespace for Body


function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  engine = Engine.create();
  world = engine.world;
  //criando um corpo redondo
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground and a body rectangle
ground = Bodies.rectangle(100,400,400,20,ground_options);
World.add(world,ball); //add to world

ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
  rect(ground.position.x,ground.position.y,500,20);

console.log(ground.position.y);
}

