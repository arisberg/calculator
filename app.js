
window.onload = function () {
var input = 0;
var firstValue = 0;
var secondValue= 0;
var operator = null;

function getInput() {
	input = (this.firstChild.innerHTML);
	document.getElementById('display').firstChild.innerHTML += input;
}

function storeValue() {
	firstValue = document.getElementById('display').firstChild.innerHTML;
	input = 0;
	oper = (this.firstChild.innerHTML);
	document.getElementById('display').firstChild.innerHTML = "";
}

function getAnswer() {
	secondValue = document.getElementById('display').firstChild.innerHTML;
	document.getElementById('display').firstChild.innerHTML = eval(firstValue + oper + secondValue);
}

function clearDisplay() {
	input = 0;
	firstValue = 0;
	secondValue= 0;
	operator = null;
	document.getElementById('display').firstChild.innerHTML = ""
}

var buttons = document.getElementsByClassName('button'); 
	console.log(buttons);
	for (var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("click", getInput);

	}

var operator = document.getElementsByClassName('op');
	for (var i = 0; i < operator.length; i++){
	operator[i].addEventListener("click", storeValue);
	}

document.getElementById('equals').addEventListener("click", getAnswer);
document.getElementById('clear').addEventListener("click", clearDisplay);




}




