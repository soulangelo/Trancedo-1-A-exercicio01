function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  
  stroke('purple')
  fill("gray");
 
  if(mouseIsPressed){
     rect(mouseX,mouseY,20,20);
  }
  
}