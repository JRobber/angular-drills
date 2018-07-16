angular.module('myApp').controller('mainCtrl', function($scope, myService){

$scope.test = "most triumphant";

$scope.theData = myService.dataGood();


});
