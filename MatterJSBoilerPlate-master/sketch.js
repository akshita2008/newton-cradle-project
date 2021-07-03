const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var c1,c2,c3,c4,c5;



function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1= new Ball(320,575,40);
bob2= new Ball(360,575,40);
bob3= new Ball(400,575,40);
bob4= new Ball(440,575,40);
bob5= new Ball(480,575,40);
roof= new Ground(600,100,500,30);
c1= new Chain(bob1.body,roof.body,-80,0);
World.add(world,c1);
c2= new Chain(bob2.body,roof.body,-40,0);
World.add(world,c2);
c3= new Chain(bob3.body,roof.body,0,0);
World.add(world,c3);
c4= new Chain(bob4.body,roof.body,40,0);
World.add(world,c4);
c5= new Chain(bob5.body,roof.body,80,0);
World.add(world,c5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  Engine.update(engine);
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 c1.display();
 c2.display();
 c3.display();
 c4.display();
 c5.display();
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
}
}

