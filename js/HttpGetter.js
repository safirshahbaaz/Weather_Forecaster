app.factory('HttpGetter', function($http){
    return {
      getsomething: function(query, callback){
        $http.get('http://api.apixu.com/v1/current.json?key=97fb82d0ba60454d8b055538161904&q=' + query).success(callback);
      }
    };
  });