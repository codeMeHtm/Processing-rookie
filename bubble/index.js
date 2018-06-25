// Draw some text to the screen:
var input = document.getElementById("text");
input.onchange = function() {
	drawName(input.value);
};
drawName("Unicorn!");
// Animate the text!
bounceBubbles();
