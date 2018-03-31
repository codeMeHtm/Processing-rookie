
class RandomWalker {
	constructor(p, r) {
		this.r = r;
		this.pos = createVector(p.x, p.y);
		this.vel = createVector(this.r / 2, this.r / 2);
		this.allowedDirections = [0, 1, 2, 3];
	}

	show() {
		this.update();
		const h = map(this.pos.x, 0, width, 0, 360);
		stroke(h, 100, random(75, 100));
		strokeWeight(this.r);
		return point(this.pos.x, this.pos.y);
	}

	update() {
		const dir = this.direction();
		if (dir == 0) return this.pos.x += this.vel.x;
		if (dir == 1) return this.pos.y += this.vel.y;
		if (dir == 2) return this.pos.x -= this.vel.x;
		if (dir == 3) return this.pos.y -= this.vel.y;
	}

	direction() {
		if (this.pos.x > 0 &&
			this.pos.x < width &&
			this.pos.y > 0 &&
			this.pos.y < height
		) return random(this.allowedDirections);
		if (this.pos.x <= 0) return this.pos.x += this.vel.x;
		if (this.pos.x >= width) return this.pos.x -= this.vel.x;
		if (this.pos.y <= 0) return this.pos.y += this.vel.y;
		if (this.pos.y >= height) return this.pos.y -= this.vel.y

	}
}

const r = 5;
let walkers = [];
const grid = [];

function setup() {
	createCanvas(800, 800);

	const res = r;
	const rows = width / res;
	const cols = height / res;

	for (let x = 0; x < width; x += res) for (let y = 0; y < height; y += res) grid.push({ x: x, y: y });

	background(255);
	for (let i = 0; i < 50; i++) {
		walkers.push(new RandomWalker(random(grid), r));
	}
	colorMode(HSB);
}

function draw() {
	for (w of walkers) w.show();
	stroke(0);
	strokeWeight(4);
	noFill();
	rect(0, 0, width, height);
}
