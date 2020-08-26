var bullet,wall;
var deformation;
var speed,weight;

function setup() {
  createCanvas(1600,400);
 
  bullet = createSprite(200,200,100,50);
  bullet.velocityX = random(55,90);
  bullet.shapeColor = ("white");
  
  wall = createSprite(1300,200,60,height/2);
  wall.shapeColor = color(80,80,80);

  speed = bullet.velocityX;
  weight = random(400,1500);
  deformation = 0.5*weight*speed*speed/22500;
  }
function hascollided (bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge) 
  {
    return true;
  }
}
return false;

function draw() 
{
  background(30,40,30);
  if (hascollided(wall,bullet)) 
{
  bullet.velocity.x=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if (damage>10) 
  {
    wall.shapeColor=color(255,0,0);
  }
  if (damage<10)
  {
    wall,shapeColor=color(0,255,0);
  }
}
    
  console.log(deformation);
  hascollided();
  drawSprites(); 
}