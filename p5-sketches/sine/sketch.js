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
let button;
let clicked = false;
let slider;

function setup() {
	createCanvas(windowWidth, 400);
	increment = PI/25;
	const p = createP("Slide it to set the Frame Rate!");
	slider = createSlider(20, 60, 30, 1);
	p.style("font-size", "50px");
	p.style("color", "#fff")
	document.body.style.background = "#000";
}

function draw() {
	cincrement = TWO_PI/30;
	frameRate(slider.value());
	
	background(0);
	const circle1 = {
		x: x,
		y: height/2 + height/4 + cos(angle) * 25,
		r: 10
	};
	const circle2 = {
		x: x,
		y: height/2 + height/4 + cos(angle) * -25,
		r: 10
	};
	const point1 = {
		x: x1,
		y: height/2 + height/4 + sin(cangle) * 20
	};
	const point2 = {
		x: x1,
		y: height/2 + height/4 + sin(cangle) * -20
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

	stroke(0, 255, 0);
	strokeWeight(10);
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
	console.log(angle);
	angle += increment;
	cangle += cincrement;
	x += xvel;
	x1 += x1vel;
	if (x >= width - 10) {
		xvel *= -1;
		increment = TWO_PI/30;
	} else if (x <= 0 + 10) {
		xvel *= -1;
		increment = PI / 20;
	}
	if (x1 >= width - 10 || x1 <= 0 + 10) x1vel *= -1;
}
