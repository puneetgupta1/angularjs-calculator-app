var app = angular.module("CalculatorApp", []);

app.controller('CalculatorCtrl', function(){
	this.result = 0;
	this.buttonClicked = function(button) {
		this.selectedOperation = button;
		var number1 = parseFloat(this.firstNumber);
		var number2 = parseFloat(this.secondNumber);
		
		if (this.selectedOperation === '+') {
			this.result = number1 + number2;
		} else if (this.selectedOperation === '-') {
			this.result = number1 - number2;
		} else if (this.selectedOperation === '*') {
			this.result = number1 * number2;
		} else if (this.selectedOperation === '/') {
			this.result = number1 / number2;
		}
	}
})