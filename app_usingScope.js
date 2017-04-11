var app = angular.module("CalculatorApp", []);

app.controller('CalculatorCtrl', ['$scope', function($scope){
	$scope.add = function() {
		$scope.result = $scope.firstNumber + $scope.secondNumber;
	}

	$scope.subtract = function() {
		$scope.result = $scope.firstNumber - $scope.secondNumber;
	}

	$scope.multiply = function() {
		$scope.result = $scope.firstNumber * $scope.secondNumber;
	}

	$scope.divide = function() {
		$scope.result = $scope.firstNumber / $scope.secondNumber;
	}
}])