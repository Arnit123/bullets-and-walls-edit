var bullet,wall,speed,weight,thickness;

//mam plz check why is this not working
function setup() {
createCanvas(1600,400);

thickness = random(22,83)
  speed=random(223,321);
 weight=random(30,52); 
bullet = createSprite(50, 200, 40, 10);
bullet.shapeColor = "white"
bullet.velocityX = speed;

wall = createSprite(1200,200,thickness,height/2);

}

function draw() {
  background(0,0,0); 

if(hasCollided(bullet,wall)){
var damage = 0.5 * weight * speed * speed/thickness*thickness*thickness;
if(damage>10)
{
  wall.shapeColor = "red";
}
  if(damage<10)
{
  wall.shapeColor = "green";
}
  
}
drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.Width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }return false
}
