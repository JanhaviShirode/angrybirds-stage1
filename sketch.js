const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
var myEngine,myWorld;
var ground;
var box1;
var box2;
var box3;
var pig1;
var log1;
var pig2;
var box4;
var log2;
var box5;
var log3;
var log4;
var bird1;
function setup() {
  createCanvas(1200,400);
myEngine = Engine.create();
myWorld =myEngine.world

ground = new Ground(600,height,1200,20);
World.add(myWorld,ground)
box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3= new Box(700,240,70,70);
pig1= new Pig(810,350);
log1=new Log(810,260,300,PI/2);
box4= new Box(920,240,70,70);
pig2= new Pig(810,220);
log2= new Log(810,180,300,58);
box5 = new Box(810,160,70,70);
log3= new Log(760,120,150,PI/7);
log4 = new Log(870,120,150,-PI/7);
bird1= new Bird(100,100);

}

function draw() {
  background(0); 
  Engine.update(myEngine);

ground.display();
 box1.display();
 box2.display();
 box3.display();
 pig1.display();
log1.display();
box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird1.display();
}