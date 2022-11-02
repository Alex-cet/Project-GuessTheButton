function startGame() {
	let numberButtons = document.getElementById("numberOfButtons").value;
	let randomButton = [Math.floor(Math.random() * numberButtons)];
	for (i = 0; i < numberButtons; ++i) {
		let btn = document.createElement("button");
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
