
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,boxBase,boxLeftSide,boxRightSide

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Box(400,490,800,20)

	boxBase = new Box(740,200,100,15)
	boxLeftSide = new Box(685,150,15,100)
	boxRightSide = new Box(795,250,15,800)

	ball = new Paper()
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("brown")
ground.display();
boxRightSide.display();
fill("white")

boxLeftSide.display();
boxBase.display();
ball.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.1,y:-0.1})
	}
}



