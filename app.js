
window.onload = function () {

//creates the variables needed and sets them to 0 or null	
var input = 0;
var firstValue = 0;
var secondValue= 0;
var operator = null;

//grabs the HTML from the div and stores it in input for later use.
//edits the HTML of the display div to display the input
function getInput() {
	input = (this.firstChild.innerHTML);
	document.getElementById('display').firstChild.innerHTML += input;
}

//saves the number is stored in the display and resets input to zero.
//uses the same method as getInput to grab the HTML from an operator button click.
//store the operator in the variable oper.
//sets the display to an empty string.
function storeValue() {
	firstValue = document.getElementById('display').firstChild.innerHTML;
	input = 0;
	oper = (this.firstChild.innerHTML);
	document.getElementById('display').firstChild.innerHTML = "";
}

//stores the HTML in display in the secondValue variable.
//sets the HTML of display to the eval of the stored first value + the operator + the second value.
function getAnswer() {
	secondValue = document.getElementById('display').firstChild.innerHTML;
	document.getElementById('display').firstChild.innerHTML = eval(firstValue + oper + secondValue);
}

//wipes all variables and sets the display HTML to an empty string.
function clearDisplay() {
	input = 0;
	firstValue = 0;
	secondValue= 0;
	operator = null;
	document.getElementById('display').firstChild.innerHTML = ""
}

//loops through all elements with the class number and creates a click event which calls getInput
var numbers = document.getElementsByClassName('number'); 
	console.log(numbers);
	for (var i = 0; i < numbers.length; i++){
		numbers[i].addEventListener("click", getInput);

	}

//loops through all elements with class op and creates a click event which calls storeValue
var operator = document.getElementsByClassName('op');
	for (var i = 0; i < operator.length; i++){
		operator[i].addEventListener("click", storeValue);
	}

//creates a click event for the equals div that calls getAnswer
document.getElementById('equals').addEventListener("click", getAnswer);

//creates a click event for the clear div that calls clearDisplay
document.getElementById('clear').addEventListener("click", clearDisplay);




}




