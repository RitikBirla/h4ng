angular.module('app', ['ngGSpreadsheet'])
  .controller('NameController', ['$scope', 'spreadsheet', function($scope, spreadsheet) {
    $scope.ctrl = {
		name:'Please press button!',
		sex:'male',
		addLastname:true,
		doublename:true,
	};
	
	$scope.name = "myName";
	
	var firstmale = [];
	var firstfemale = [];
	var first = {male: [], female: []};
	var last = [];
	
	$scope.generateRandomName = function(sex) {	
		firstname = [random(first[sex])];
		$scope.ctrl.name = firstname;
		if ($scope.ctrl.doublename) {
			$scope.ctrl.name += "-" + otherName(first[sex], firstname);
		}			
		if ($scope.ctrl.addLastname) {
			$scope.ctrl.name += " " + random(last);
		}		
	}
	
	function random(a) {
		return a[Math.floor(Math.random()*a.length)];
	}
	
	function otherName (a, name) {
		var otherName = name;
		while (otherName == name) {
			otherName = random(a);
		} 
		return otherName;
	}
 
    var seed = spreadsheet('list', '1pLpLdMuNU2LlwIk4J5aQPpVmcqrOsPrzfM9AHlpLs1Q', 1 ,'yarrays');
    
    var readSpeadsheet = function(data,name){
		first.male = data.firstmale;
		first.female = data.firstfemale;
		last = data.last;
	}
	
    seed.then(readSpeadsheet);    
 
  }]);
