const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declaring the variable for blocks upto 16
var block1,ground,block2;
var block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14;
var block15,block16;

//declaring the variable log
var log1;

//declaring the var chain
var polygon,slingshot;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
   polygon=new Bx(200,20,20,20);

    
  ground=new Ground(400,400,800,20);

  //creating blocks upto 16
  block15=new Box(200,380,20,20);
  block1=new Box(300,380,20,20);
  block2=new Box(275,380,20,20);
block3=new Box(325,380,20,20);
block4=new Box(350,380,20,20);
block5=new Box(375,380,20,20);
block6=new Box(250,380,20,20);
block7=new Box(225,380,20,20);
block8=new Box(225,380,20,20);
block9=new Box(250,355,20,20);
block10=new Box(325,355,20,20);
block11=new Box(275,355,20,20);
block12=new Box(300,355,20,20);
block13=new Box(300,330,20,20);
block14=new Box(275,330,20,20);
block16=new Box(285,305,20,20)

//creating a log for the slinghot

log1=new Ground(30,20,20,10);
slingshot=new Slingshot(polygon.body,{x:180,y:20});
drawSprites();
}

function draw() {
  
  background(25,25,112); 
  ground.display();

  //displaying all the blocks

  block1.display(); 
  block2.display();
  block3.display();
  block4.display();
  block5.display(); 
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  //displaying the log
  log1.display();
polygon.display();

slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
  polygon.fly();
}
