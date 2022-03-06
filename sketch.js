let micVar;
let mic;
let myEnchantments = [];
let sketchStarted = false

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  createButton("Enchant").mousePressed(startSketch);
  for (let i = 0; i < 300; i++) {
    let x = random(200, 350);
    let y = random(300, 156);
    myEnchantments[i] = new enchantment(x, y);
  }
}

function startSketch(){
  mic = new p5.AudioIn()
  mic.start();

  sketchStarted = true;
}

function draw() {

  if(sketchStarted){
    background(109, 104, 149);
    for (let i = 0; i < 300; i++) {
      myEnchantments[i].display();
      myEnchantments[i].move();
    }
    //mic setup
    micVar = map(mic.getLevel(), 0, 0.1, 0, 245);
    line(mouseX, 0, mouseX, 100);
    noStroke();
    push();
    if (mouseX > 300) {
      // Set colors
      fill(131, 242, 161, 130);
      stroke(127, 63, 120);
      // magic flower right
      translate(150, 100);
      noStroke();
      for (let i = 0; i < 10; i++) {
        ellipse(0, 10, 20, 100);
        rotate(frameCount / 10.0);
      }
    } else {
      fill(131, 242, 161, 130);
      // magic flower left
      translate(400, 390);
      noStroke();
      for (let i = 0; i < 10; i++) {
        ellipse(0, 10, 20, 100);
        rotate(frameCount / 10.0);
      }
    }
    pop();
    angleMode(DEGREES);
    translate(width / 2, height / 2);
    arms();
    hand();
    fingers();
    magic();
    stars(35, 50, 100);

  }

}

function arms() {
  //front of sleeve
  push();
  stroke(1);
  strokeWeight(2);
  fill(042, 98, 61);
  rotate(140);
  ellipse(width * 0.24, height * -0.03, width * 0.4, height * 0.28);
  pop();
  // full sleeve
  push();
  fill(0);
  rotate(140);
  rect(width * 0.16, height * -0.176, width * 0.6, height * 0.29, width * 0.04);
  pop();
}

function fingers() {
  fill(211, 164, 138);
  angleMode(DEGREES);
  rotate(140);
  rotate(20);
  ellipse(width * 0.012, height * 0.12, width * 0.06, height * 0.19);

  rotate(60);
  ellipse(width * 0.06, height * 0.16, width * 0.06, height * 0.3);

  push();
  angleMode(DEGREES);
  rotate(20);
  ellipse(width * 0.03, height * 0.16, width * 0.06, height * 0.3);

  rotate(10);
  ellipse(width * -0.03, height * 0.16, width * 0.06, height * 0.3);

  rotate(20);
  ellipse(width * -0.05, height * 0.1, width * 0.06, height * 0.32);
  pop();
}

function hand() {
  push();
  fill(211, 164, 138);
  rotate(140);
  rect(width * -0.12, height * -0.16, width * 0.2, height * 0.26, width * 0.06);
  pop();
}

function magic() {
  // Set colors
  fill(131, 242, 161, 160);
  stroke(127, 63, 120);
  // Main magic star
  translate(-20, 30);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 10, 130);
    rotate(frameCount / 10.0);
  }
}

function stars(xpos, ypos) {
  fill(51, 81, 119, 130 + micVar);
  rotate(mouseX);
  noStroke();
  rotate((xpos, ypos));
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  endShape();
}

class enchantment {
  constructor(xpos, ypos) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.t = int(random(360));
    this.s = random(-2, 2);
  }
  display() {
    push();
    translate(this.xpos, this.ypos);
    rotate(this.t);
    fill(51, 81, 119, 50);
    ellipse(65, -1, 40);
    ellipse(65, 10, 40);
    ellipse(65, 20, 35);

    pop();
  }
  move() {
    this.t = this.t + this.s;
  }
}
