
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var gamestate = "beflaunch";

function preload()
{
	hexagoni = loadImage("hexagon-16.png");
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(590, 500, 300, 20);

	//1st floor.
	block1 = new Block3l(530, 235, 30, 40);
	block2 = new Block3l(560, 235, 30, 40); 
	block3 = new Block3l(590, 235, 30, 40);
	block4 = new Block3l(620, 235, 30, 40);
	block5 = new Block3l(650, 235, 30, 40);

	//2nd floor.
	block6 = new Block2l(560, 195, 30, 40);
	block7 = new Block2l(590, 195, 30, 40);
	block8 = new Block2l(620, 195, 30, 40);
	
	//3rd floor.
	block9 = new Block1l(590, 155, 30, 40);

	player = new Hexagon(200, 200, 40);

	slingshot = new Sling(player.body, {x : 250, y: 250})

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  slingshot.display();
  player.display();
  
  drawSprites();
}

function mouseDragged()
{
    if(gamestate === "beflaunch")
    Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
    slingshot.fly();
    gamestate = "aflaunch";
}

function keyPressed()
{
    if(keyCode === 32 && gamestate === "aflaunch")
    {
        slingshot.attach(player.body);
        Matter.Body.setPosition(player.body, {x : 200,y : 200});
        gamestate = "onsling";
    }
}



