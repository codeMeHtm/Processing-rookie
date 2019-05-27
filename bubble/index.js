// Draw some text to the screen:
var input = document.getElementById("text");
input.onchange = function() {
	drawName(input.value);
};
drawName("Enter your text ...");
// Animate the text!
bounceBubbles();
