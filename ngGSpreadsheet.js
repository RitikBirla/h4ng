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
		  d = data.feed.entry;
		  var results = {};
		  for(var i=0,imax=d.length;i<imax;i+=1) {
			  entry = d[i].content.$t.replace(/ /g,'').split(",");
			  for(var j=0, jmax=entry.length;j<jmax;j+=1) {
				  pair = entry[j].split(":");
				  key = pair[0];
				  value = pair[1];
				  if (!results[key]) {results[key] = []}
				  results[key].push(value);				  
			  }
		  }
          deferred.resolve(results);
        }).
        error(function(data, status) {
          deferred.reject(data);
      });
      
      return deferred.promise;

    };
  }]);
