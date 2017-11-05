var app = angular.module('myApp', [ 'toaster','ngAnimate']);
  	app.controller('myCtrl',['$scope','toaster', function($scope, toaster) {
  		
  $scope.pop = function(){
        toaster.pop('success', "success", "text");
    };
	 $scope.pop1 = function(){
        toaster.pop('error', "error", "text");
    };
	 $scope.pop2 = function(){
        toaster.pop('warning', "warning", "text");
    };
	 $scope.pop3 = function(){
        toaster.pop('note', "note", "text");
    };
	
        
        
}]);