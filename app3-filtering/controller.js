angular.module("myApp").controller("myCtrl", function($scope, myService){

$scope.controllerisbroken = "Controller is operational"
$scope.serviceisbroken = myService.serviceisbroken

$scope.people = myService.getData()

})