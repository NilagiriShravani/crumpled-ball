
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;
  left = new Dustbin(1240,610,20,130)
  right = new Dustbin(1440,600,20,130)
  bottom = new Dustbin(1350,650,200,20)
  ground = new Ground(width/2,670,width,20)
  paper = new Paper(200,450,40)
 // dustbinObj=new dustbin(1200,650);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  bottom.display()
  left.display()
  right.display()
  ground.display()
  paper.display()
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50})
  }

}


