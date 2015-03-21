
window.onload = function () {
var input = 0;
function getInput() {
	input = (this.firstChild.innerHTML);
	document.getElementById('display').firstChild.innerHTML += input;
}

function storeValue() {
	var firstValue = input;
	input = 0;
	document.getElementById('display').firstChild.innerHTML = "";
}


var buttons = document.getElementsByClassName('button'); 
	console.log(buttons);
	for (var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("click", getInput);

	}

 var clear = document.getElementById('clear');
 	clear.addEventListener("click", storeValue);

}

