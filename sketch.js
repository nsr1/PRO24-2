
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var box1, box2, box3, ground,paper

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new bin(1200, 550)
	
	ground = new Ground(800,570,1600,20)
	paper = new Paper(100,450,20)
	paper.velocityY = -5
	var render = Render.create({ element: document.body, engine: engine, 
		options: { width: 1200, height: 700, wireframes: false } }); 
	Engine.run(engine);

	
	console.log(Paper.x)
  	console.log(Paper.y)
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display()
  paper.display()
  box1.display()
  
  keyPressed();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1.1, y:-1.1})
	}
}

