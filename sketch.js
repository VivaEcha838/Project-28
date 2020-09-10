
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, mango;



var stone;

var mango1,mango2,mano3,mango4,mango5;

var slingshot;
function preload()
{

}

function setup() {
	createCanvas(1600, 1400);
	


	engine = Engine.create();
	world = engine.world;

	

	

	stone = new Stone(160,130,50,50);

	tree = new Tree(400,400,400,400);

	mango1 = new Mango(400,370,35);

	mango2 = new Mango(390,370,35);

	mango3 = new Mango(385,370,35);

	mango4 = new Mango(377,370,35);

	mango5 = new Mango(370,370,35);

	slingshot = new SlingShot(stone.body,{x:100, y:50});
     



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

slingshot.display();

  stone.display();
  tree.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
	 Matter.Body.setPosition(stoneObj, {x: 235, y: 420});
	 slingshotObject.attach(stoneObj.body);
    }
}

function detectCollision(lstone, lmango){
 mangoBodyPosition - lmango.body.position
stoneBodyPosition - lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

if (distance <= lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body, false);
}
}