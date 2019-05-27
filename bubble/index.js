// Draw some text to the screen:
var input = document.getElementById("text");
input.onchange = function() {
	drawName(input.value);
};
drawName("Enter your text in the box above ...");
// Animate the text!
bounceBubbles();
