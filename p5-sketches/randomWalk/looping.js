import { draw } from "./sketch";

function loops() {

	if (looping) {
		for (w of walkers) w.show();
		stroke(0);
		noFill();
		strokeWeight(5);
	}
}

module.exports = loops;
