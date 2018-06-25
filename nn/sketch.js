let nn = new NeuralNetwork(2, 8, 1);
let nn1 = new NeuralNetwork(2, 4, 1);
let training_data = [	{ inputs: [0, 0], outputs: [0] },
	{ inputs: [0, 1], outputs: [1] },
	{ inputs: [1, 0], outputs: [1] },
	{ inputs: [1, 1], outputs: [0] } ];

let p, pMin, lr_slider;
let tries = [];

function setup() {
	createCanvas(400 * 2, 400);
	lr_slider = createSlider(0.01, 1, 0.5, 0.01);
	p = select("#guess");
	pMin = select("#min");
	p.html("° 2 Inputs<br />° 1 Hidden layer - 8 neurons<br />° 1 Output");
	pMin.html("° 2 Inputs<br />° 1 Hidden layer - 4 neurons<br />° 1 Output");
}

function draw() {
	background(0);
	for (let i = 0; i < 5; i++) {
		let data = random(training_data);
		let data1 = random(training_data);

		nn.train(data.inputs, data.outputs);
		nn1.train(data1.inputs, data1.outputs);
	}
	nn.setLearningRate(lr_slider.value());
	nn1.setLearningRate(lr_slider.value());

	let res = 10;
	const rows = (width / 2) / res;
	const cols = height / res;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			let x1 = i / rows;
			let y1 = j / cols;
			let inputs = [x1, y1];
			let inputs1 = [y1, x1];
			let y = nn.predict(inputs);
			let y2 = nn1.predict(inputs1);
			noStroke();
			fill(y * 255);
			rect(i * res, j * res, res, res);
			noStroke();
			fill(y2 * 255);
			rect(j * res + width / 2, i * res, res, res);
		}
	}
}