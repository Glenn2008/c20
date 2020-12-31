function setup() {
  createCanvas(800,400);
 ball=createSprite(400, 200, 50, 50);
 car=createSprite(500,150,50,50);
 ball.shapeColor="blue";
 car.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  
  ball.x=World.mouseX;
  ball.y=World.mouseY;

  if(ball.x-car.x<ball.width/2+car.width/2 && car.x-ball.x<ball.width/2+car.width/2 && 
    ball.y-car.y<ball.height/2+car.height/2 && car.y-ball.y<ball.height/2+car.height/2 ){
  car.shapeColor="blue";
  }
  else{
  
    car.shapeColor="yellow";

  }






  drawSprites();


}