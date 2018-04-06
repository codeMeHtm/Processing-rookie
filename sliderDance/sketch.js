const sliders = [];
function setup() {
	noCanvas();
	for (let i = 0; i < TAU; i += PI / 15) {
		const x = sin(i);
		const angle = map(x, -1, 1, 0, 100);
		sliders.push(createSlider(0, 100, angle));
	}
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].style("position", "absolute");
		// const y = i*20;
		sliders[i].style('top', i * 20 + "px");
		sliders[i].style("left", "20px");
	}
}
let angle = 0;
function draw() {
	const xOff = TAU / sliders.length;
	const inc = PI / 100;
	let cAngle = angle;
	for (s of sliders) {
		const x = map(sin(cAngle), -1, 1, 0, 100);
		s.value(x);
		cAngle += xOff;
	}

	angle += inc;
}
