var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var red1, red2, red3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

	red1 = createSprite(width/2,height-50,200,20);
	red1.shapeColor = "red";

	red2 = createSprite(300,610,20,100);
	red2.shapeColor = "red";

	red3 = createSprite(500,610,20,100);
	red3.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
   
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y
  }
}