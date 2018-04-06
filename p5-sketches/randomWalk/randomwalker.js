class RandomWalker {
	constructor(p, r) {
		this.r = r;
		this.pos = createVector(p.x, p.y);
		this.vel = createVector(this.r / 2, this.r / 2);
		this.allowedDirections = [0, 1, 2, 3];
	}

	show() {
		this.update();
		const h = map(this.pos.x, 0, rWidth, 0, 360);
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
		if (
			this.pos.x > 5 &&
			this.pos.x < rWidth &&
			this.pos.y > 5 &&
			this.pos.y < height - 7
		) return random(this.allowedDirections);

		if (this.pos.x <= 5) return this.pos.x += this.vel.x;
		if (this.pos.x >= rWidth) return this.pos.x -= this.vel.x;
		if (this.pos.y <= 5) return this.pos.y += this.vel.y;
		if (this.pos.y >= height - 7) return this.pos.y -= this.vel.y

	}
}
