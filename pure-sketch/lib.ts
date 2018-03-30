
interface Canvas {
	canvas: object;
	width: number;
	height: number;
}

let canvas: HTMLCanvasElement;
let ctx: any;

class Canvas {
	constructor(x: number, y: number) {
		this.width = x;
		this.height = y;
		canvas = document.createElement('canvas');
		canvas.width = this.width;
		canvas.height = this.height;
		document.body.appendChild(canvas);

	}

	getCTX(): any {
		return ctx = canvas.getContext("2d");
	}
}

window.onload = () => {
	let ctx: any;
	let canvas: Canvas;
	let width: number;
	let height: number;

	const createCanvas = (x: number, y: number) => {
		canvas = new Canvas(x, y);
		width = canvas.width;
		height = canvas.height;

	};

	const background = (x: number, y?: number, z?: number) => {
		ctx = canvas.getCTX();
		if (typeof y === 'undefined') ctx.fillStyle = `rgb(${x}, ${x}, ${x})`;
		else ctx.fillStyle = `rgb(${x}, ${y}, ${z})`;

		ctx.fillRect(0, 0, width, height);
	};

	const fill = (x: number, y?: number, z?: number, a?: number) => {
		if (!y) return ctx.fillStyle = `rgb(${x}, ${x}, ${x})`;
		// else if (!z) ctx.fillStyle = `rgba(${x}, ${x}, ${x}, ${y})`;
		else if (!a) return ctx.fillStyle = `rgb(${x}, ${y}, ${z})`;
	};

	const point = (x: number, y: number) => ctx.fillRect(x, y, 1, 1);

	const rect = (x: number, y: number, w: number, h: number) => ctx.fillRect(x, y, w, h);

	const stroke = (x: number, y: number, z: number) => {
		ctx.beginPath();

	}

	const floor = (x: number) => { return Math.floor(x); };

	const random = (x: number, y?: number) => {
		if (!y) return Math.random() * x;
		else return Math.random() * (y - x) + x;
	};

	const sin = (a) => { return Math.sin(a) };

	let x: number;
	let y: number;
	let xvel: number;

	function setup() {
		createCanvas(600, 400);
		background(0);

		let rand = floor(random(200, 210));
		if (rand >= 200 && rand < 210) console.log("Correct!"); else console.log("Incorrect!");
		console.log(rand);

		x = 0;
		y = height / 2;
		xvel = 1;
		draw();

	}

	const sq = {
		w: 20,
		h: 20,
		x,
		y
	};
	let a = 0;
	const inc = Math.PI / 50;

	function draw() {
		sq.x = x;
		sq.y = height / 2 + sin(a) * 40;
		fill(200);

		ctx.strokeRect(sq.x, sq.y, sq.w, sq.w);
		rect(sq.x, sq.y, sq.w, sq.w);
		x += xvel;
		a += inc;
		if (x < 0) xvel *= -1;
		if (x > width - sq.w) xvel *= -1;
		setTimeout(() => {
			draw();
		}, 10);
	}


	setup();

}


