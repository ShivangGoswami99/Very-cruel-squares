const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var box,box2,box3;

function setup() {
  var canvas=createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  
  box= new Box(200,100,20,20);
  box2= new Box(220,200,30,40);
  box3 = new Box(240,300,50,50);
  ground= new Ground(200,400,400,30);


}

function draw() {
  background("black");
  
  Engine.update(engine);
  box.display();
  box2.display();
  box3.display();
  ground.display();
console.log(box.body.position.x);
console.log(box.body.position.y);

console.log(box.body.angle);


}