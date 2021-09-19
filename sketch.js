function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(500);
  
  
}

function draw() {
  
  noStroke();
  background("black");

  let myColor = lerpColor(color("black"), color("pink"), frameCount / 300);
  let myColor2 = lerpColor(color("black"), color("lightblue"), frameCount / 300);
  let myColor3 = lerpColor(color("black"), color("lightyellow"), frameCount / 300);

  

  translate(width/2, height/2);
  textSize(30);
  textAlign(CENTER);

  
  push()
  fill(myColor);
  rotate(frameCount * 2); 
  text(frameCount, 0, 10);

  translate(width/10, height/10);
  rotate(frameCount * 2); 
  text(frameCount, 0, 10);

  translate(width/20, height/20);
  rotate(frameCount * 2); 
  text(frameCount, 0, 10);

  translate(width/30, height/30);
  rotate(frameCount * 2); 
  text(frameCount, 0, 10);

  translate(width/45, height/45);
  rotate(frameCount * 2); 
  text(frameCount, 0, 10);

  translate(width/67.5, height/67.5);
  rotate(frameCount * 2); 
  text(frameCount, 0, 10);

  pop()
  push()
  fill(myColor2);

  rotate(-frameCount); 
  text(frameCount, 0, 10);

  translate(width/10, height/10);
  rotate(-frameCount); 
  text(frameCount, 0, 10);

  translate(width/20, height/20);
  rotate(-frameCount); 
  text(frameCount, 0, 10);

  translate(width/30, height/30);
  rotate(-frameCount); 
  text(frameCount, 0, 10);

  translate(width/45, height/45);
  rotate(-frameCount); 
  text(frameCount, 0, 10);

  translate(width/67.5, height/67.5);
  rotate(-frameCount); 
  text(frameCount, 0, 10);

  pop()
  push()

  fill(myColor3);

  rotate(frameCount*1.5); 
  text(frameCount, 0, 10);

  translate(width/10, height/10);
  rotate(frameCount*1.5); 
  text(frameCount, 0, 10);

  translate(width/20, height/20);
  rotate(frameCount*1.5); 
  text(frameCount, 0, 10);

  translate(width/30, height/30);
  rotate(frameCount*1.5); 
  text(frameCount, 0, 10);

  translate(width/45, height/45);
  rotate(frameCount*1.5); 
  text(frameCount, 0, 10);

  translate(width/67.5, height/67.5);
  rotate(frameCount*1.5); 
  text(frameCount, 0, 10);

pop()
  if(frameCount%100 < 10 && frameCount%1000 > 10 ) {
    noFill();
    stroke("white");
    strokeWeight(7)
    circle(0, 0, frameCount/8); 
   }  

   if(frameCount%1000 < 10) {
    stroke("white");
    strokeWeight(15)
    circle(0, 0, frameCount/8); 
   } 

 }