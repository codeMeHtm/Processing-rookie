// Draw some text to the screen:
var input = document.getElementById("text");
input.onchange = function() {
	drawName(input.value);
};
drawName("DÉJÀ 9 MOIS QUE JE T'ADORE MON AMOUR! <3 Je t'aime fort");
// Animate the text!
bounceBubbles();
