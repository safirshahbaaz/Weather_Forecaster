app.controller('MainController', ['$scope', function($scope) { 
	$scope.cityName = '';
	$scope.getCityName = function(city) {
		$scope.cityName = city;
		console.log($scope.cityName);
	};
}]);