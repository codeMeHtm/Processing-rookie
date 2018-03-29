const circles = [];
let angle = 0;
let increment;
let x = 10;
let xvel = 3;
let cangle = 0;
let cincrement;
const points = [];
let x1 = 10;
let x1vel = 3;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	cincrement = TWO_PI/30;
	increment = PI/20;
	
	background(0);
	noStroke();
	fill(255);
	rect(0, 0, width, height/4);
	rect(0, height/2 + height/4, width, height/2 + height/4);
	const circle1 = {
		x: x,
		y: height/2 + cos(angle) * 25,
		r: 10
	};
	const circle2 = {
		x: x,
		y: height/2 + cos(angle) * -25,
		r: 10
	};
	const point1 = {
		x: x1,
		y: height/2 + sin(cangle) * 20
	};
	const point2 = {
		x: x1,
		y: height/2 + sin(cangle) * -20
	};

	points.push(point1);
	points.push(point2);


	noStroke();
	fill(255);
	circles.push(circle1);
	circles.push(circle2);
	for (c of circles) {
		fill(255);
		ellipse(c.x, c.y, c.r, c.r);
	}

	stroke(255, 0, 255);
	strokeWeight(8);
	for (p of points) {
		point(p.x, p.y);
	}


	if (circles.length >= 50) {
		circles.shift();
		circles.shift();
	}
	if (points.length >= 40) {
		points.shift();
		points.shift();
	}
	angle += increment;
	cangle += cincrement;
	x += xvel;
	x1 += x1vel;
	if (x >= width - 10) {
		xvel *= -1;
		increment = TWO_PI/20;
	} else if (x <= 0 + 10) {
		xvel *= -1;
		increment = PI / 10;
	}
	if (x1 >= width - 10 || x1 <= 0 + 10) x1vel *= -1;
}
