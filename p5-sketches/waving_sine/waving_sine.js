let centers = [];
let angle = 0;
let increment;
let rx;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  frameRate(15);
}

function draw() {
  background(0);
  // Making the xs and ys for the points
  let x = frameCount * 0.5;
  let y11 = height / 2 + sin(angle) * (height/4);
  let y12 = height / 2 + sin(angle) * -(height/4);
  let y21 = height / 2 + cos(angle) * (height/4);
  let y22 = height / 2 + cos(angle) * -(height/4);
  // Colors
  let h = map(x, 0, width * 2, 0, 360);
  let b11 = map(y11, height / 4, height / 4 + height / 2, 50, 100);
  let b12 = map(y12, height / 4, height / 4 + height / 2, 50, 100);
  let b21 = map(y21, height / 4 + height / 2, height / 4, 50, 100);
  let b22 = map(y22, height / 4 + height / 2, height / 4, 50, 100);
  increment = TWO_PI / (2*(height / 2));
  // Making the points
  
  // Sine 1
  stroke(h, 100, b11);
  strokeWeight(5);
  point(x, y11);

  // Sine 2
  stroke(h, 100, b12);
  strokeWeight(5);
  point(x, y12);

  // Cosine 1
  stroke(h, 100, b21);
  strokeWeight(5);
  point(x, y21);

  // Cosine 2
  stroke(h, 100, b22);
  strokeWeight(5);
  point(x, y22);

  // Progression line
  /*
  stroke(0, 0, 255);
  strokeWeight(8);
  line(0, height/4, x, height/4);
  stroke(0, 0, 255);
  strokeWeight(8);
  line(0, height/4 + height/2, x, height/4 + height/2);
  let centerLine = height/2;
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, height/2, x, height/2);
  */
  
  stroke(0, 0, 255);
  strokeWeight(8);
  point(x, height/2);
  stroke(0, 0, 255);
  strokeWeight(8);
  point(x, height/4);
  stroke(0, 0, 255);
  strokeWeight(8);
  point(x, height/4 + height/2);
  

  // Recorded colors
  rx = x;
  rb1 = b11;
  rb2 = b21;
  rh = h;
  let ctr1 = {
    x: rx, 
    b: rb1, 
    h: rh
  };
  let ctr2 = {
    x: rx, 
    b: rb2, 
    h: rh
  };

  // Center dots
  if (y11 < centerLine + 1 && y11 > centerLine - 1) centers.push(ctr1);
  if (y21 < centerLine + 1 && y21 > centerLine - 1) centers.push(ctr2);
  for (center of centers) {
    stroke(center.h, 100, center.b);
    strokeWeight(10);
    point(center.x, height/2);
  }
  angle += increment;
  if (frameCount * 0.5 == width) noLoop();
}
