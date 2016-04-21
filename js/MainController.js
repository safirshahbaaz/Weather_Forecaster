app.controller('MainController', ['$scope', 'HttpGetter', function($scope, HttpGetter) { 
	var successFunction = function(data) {
		$scope.data = data;
		console.log(data);
	}

	var errorFunction = function(data) {
		console.log("Something went wrong: " + data);
	}

	$scope.cityName = '';
	$scope.getCityName = function(city) {
		$scope.cityName = city;
		HttpGetter.getCityData($scope.cityName, successFunction, errorFunction);
	};
}]);