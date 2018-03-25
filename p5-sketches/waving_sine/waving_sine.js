let centers = [];
let angle = 0;
let increment;
let rx;
let points = [];
let x = 0;
let xvel = 2;

function setup() {
  createCanvas(600, 200);
  colorMode(HSB);
}

function draw() {
  background(0);
  // Making the xs and ys for the points
  let y11 = height / 2 + sin(angle) * 20;
  let y12 = height / 2 + sin(angle) * -20;
  let y21 = height / 2 + cos(angle) * 20;
  let y22 = height / 2 + cos(angle) * -20;
  // Colors
  let h = map(x, 0, width * 2, 0, 360);
  let b11 = map(y11, height / 4, height / 4 + height / 2, 50, 100);
  let b12 = map(y12, height / 4, height / 4 + height / 2, 50, 100);
  let b21 = map(y21, height / 4 + height / 2, height / 4, 50, 100);
  let b22 = map(y22, height / 4 + height / 2, height / 4, 50, 100);
  increment = TWO_PI / 50;
  // Making the points

  let point1 = {
    x: x,
    y: y11,
    b: b11
  };
  let point2 = {
    x: x,
    y: y12,
    b: b12
  };
  let point3 = {
    x: x,
    y: y21,
    b: b21
  };
  let point4 = {
    x: x,
    y: y22,
    b: b22
  };

  points.push(point1);
  points.push(point2);
	points.push(point3);
	points.push(point4);

  for (let i = 0; i < points.length; i++) {
    stroke(h, 100, points[i].b);
    strokeWeight(5);
    point(points[i].x, points[i].y);
  }
  
  angle += increment;
  if (x >= width || x <= -1) xvel *= -1;
  if (points.length >= 150) {
    points.shift();
    points.shift();
    points.shift();
    points.shift();
  }
  x += xvel;
}
