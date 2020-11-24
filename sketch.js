
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,DUSTBIN1,DUSTINBIN2,DUSTBIN3,paper
function preload()
{
  binimage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(100,700,1400,20)

	Engine.run(engine);
	DUSTBIN1= new DUSTBIN(650,680,100,20)
DUSTBIN2= new DUSTBIN(590,650,20,100)
DUSTBIN3= new DUSTBIN(700,650,20,100)
  paper= new PAPER (100,100,30);

}

function draw() {
  rectMode(CENTER);
  background("orange");
  ground.display();
  DUSTBIN1.display()
  DUSTBIN2.display()
  DUSTBIN3.display()
  paper.display()
  //keyPressed()
  image(binimage,650,650,160,100)
  drawSprites();
 
}




function keyPressed () {
if (keyCode === UP_ARROW ){
Matter.Body.applyForce( paper.body,paper.body.position,{x:125,y:-170 })


}






}

