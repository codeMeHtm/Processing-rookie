let circles = [];
let angle = 0;
let increment;
let x = 0 + 10;
let xvel = 1;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	increment = TWO_PI / 50;
	background(0);
	let circle1 = {
		x: x,
		y: height/2 + cos(angle) * 25,
		r: 10
	};
	let circle2 = {
		x: x,
		y: height/2 + cos(angle) * -25,
		r: 10
	};

	noStroke();
	fill(255);
	circles.push(circle1);
	circles.push(circle2);
	for (let i = 0; i < circles.length; i++) {
		if (i % 2 == 0) {
			fill(255);
			ellipse(circles[i].x, circles[i].y, circles[i].r, circles[i].r);
		} else {
			fill(255, 0, 255);
			ellipse(circles[i].x, circles[i].y, circles[i].r, circles[i].r);
		}
	}

	if (circles.length >= 152) {
		circles.shift();
		circles.shift();
	}
	angle += increment;
	x += xvel;

	if (x >= width - 10 || x <= 0 + 10) xvel *= -1;
}
