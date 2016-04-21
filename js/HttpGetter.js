app.factory('HttpGetter', ['$http', function($http){
    return {
    	getCityData: function(query, successFunction, errorFunction){
    		return $http.get('http://api.apixu.com/v1/current.json?key=97fb82d0ba60454d8b055538161904&q=' + query).
    		success(successFunction).
    		error(errorFunction);
    	}
    };
  }]);