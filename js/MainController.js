app.controller('MainController', ['$scope', 'HttpGetter', function($scope, HttpGetter) { 
	var successFunction = function(data) {
		$scope.data = data;
		$scope.data.current.condition.icon = "http:" + $scope.data.current.condition.icon;
	}

	var errorFunction = function(data) {
		console.log("Something went wrong: " + data);
	}

	$scope.cityName = '';
	$scope.getCityName = function(city) {
		$scope.isActive = true;
		$scope.cityName = city;
		HttpGetter.getCityData($scope.cityName, successFunction, errorFunction);
	};
}]);