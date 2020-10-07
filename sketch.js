var fixedRect,movingRect;
 function setup() { 
   createCanvas(800,400);
    fixedRect=createSprite(200,200,50,100); 
    fixedRect.shapeColor='blue'; 
    movingRect=createSprite(200,200,50,100)
     movingRect.shapeColor='blue'; 
    } 
     function draw() {
   background(255,255,255);
   movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x); 
  if(movingRect.x-fixedRect.x<fixedRect.width/2 + movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2
    && fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2) {
   fixedRect.shapeColor='black'; 
   movingRect.shapeColor='black'; } 
   else {
  fixedRect.shapeColor='blue';
   movingRect.shapeColor='blue';
  }
  drawSprites(); 
  }