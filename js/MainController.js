app.controller('MainController', ['$scope', function($scope, HttpGetter) { 
	$scope.cityName = '';
	$scope.getCityName = function(city) {
		$scope.cityName = city;
		$scope.data = HttpGetter.getsomething(city, function(items) {
			return items;
		});
	};
}]);