angular.
 module('ngGSpreadsheet', []).
 factory('spreadsheet', ['$http', '$q', function($http, $q) {
  
    var converter = {
      'yarrays':function(data){
		var newData = {};
	    return newData;
	  }
		
	};
  
  
    return function(feed, key, worksheet, type) {
      var url = 'https://spreadsheets.google.com/feeds/' + feed +
				'/' + key + '/' + worksheet + '/public/basic?alt=json-in-script&callback=JSON_CALLBACK';
      var deferred = $q.defer();
      $http.jsonp(url).success(function(data, status) {
		  //TODO use converter function
          deferred.resolve(data);
        }).
        error(function(data, status) {
          deferred.reject(data);
      });
      
      return deferred.promise;

    };
  }]);
