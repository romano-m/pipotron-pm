app.factory('piposervice', ['$http', function($http) {
	return $http.get('https://spreadsheets.google.com/feeds/cells/1bgjjli3MmIcJGGfEyRvk4bNXYRrxzi9q3-CD9mUOhgE/od6/public/full?alt=json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);