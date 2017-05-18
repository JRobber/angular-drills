angular.module("myApp").controller("myController", function($scope, mySvc){

$scope.ControllerdontWork = "Controller Works"

$scope.ServiceDontWork = mySvc.ServiceDontWork

})