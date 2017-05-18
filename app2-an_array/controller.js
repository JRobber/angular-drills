angular.module("arrayApp").controller("arrayController", function($scope, mySrv){
$scope.ControllerIsBroken = "Controller Works"

$scope.ServiceIsBroken = mySrv.ServiceIsBroken

$scope.people = mySrv.getData()



})