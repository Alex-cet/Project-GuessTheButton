function myFunction() {
	var numberButtons = document.getElementById("numberOfButtons").value;
	var randomButton = [Math.floor(Math.random() * numberButtons)];
	for (i = 0; i < numberButtons; i++) {
		var btn = document.createElement("button");
		btn.innerHTML = "Try me!";
		btn.className = "btn";
		btn.id = i;
		document.getElementById("buttonContainer").appendChild(btn);
		btn.addEventListener('click', function() {
			if (btn.id == randomButton) {
				alert("You got it! You're the lucky one!");
			} else {
				alert("Nope! That's not the lucky button!");
			}
			resetGame();
		}) 
	}
}
function resetGame() {
	const clearButtons = document.getElementById("buttonContainer");
	while (clearButtons.firstChild) {
		clearButtons.removeChild(clearButtons.lastChild);
	}
	document.getElementById("numberOfButtons").value = '';
}