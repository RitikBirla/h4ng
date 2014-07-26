angular.module('app', ['ngGSpreadsheet'])
  .controller('NameController', ['$scope', 'spreadsheet', function($scope, spreadsheet) {
    $scope.ctrl = {
		name:'test'
	};
 
    var seed = spreadsheet('cells', '1pLpLdMuNU2LlwIk4J5aQPpVmcqrOsPrzfM9AHlpLs1Q', 1 ,'yarrays');
    seed.then(function(data){
	  console.log('data',data);
	});    
    
 
  }]);
