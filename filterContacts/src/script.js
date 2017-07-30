let userInput = document.getElementById("userInput");

userInput.addEventListener("keyup", saveUserInput);

function saveUserInput() {
	let inputValue = userInput.value.toUpperCase();
	searchItem(inputValue);
}

function searchItem(inputValue) {
	let tds = document.getElementsByClassName("collection-item");

	for (let td of tds) {
		let a = td.getElementsByTagName("a")[0];
		let itemText = a.innerHTML.toUpperCase();

		if (itemText.includes(inputValue)) {
			let tr = td.parentNode;
			tr.style.display = "";
		} else {
			let tr = td.parentNode;
			tr.style.display = "none";
		}
	}
}
