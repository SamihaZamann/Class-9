var box;
function setup() {
  createCanvas(500,500);
  box = createSprite(250,250,30,30)

}

function draw() 
{
  background(0,0,0);
  if(keyIsDown(LEFT_ARROW)){
  box.x = box.x-5
  }
  if(keyIsDown(RIGHT_ARROW)){
  box.x = box.x+5
  }

  drawSprites()
}




