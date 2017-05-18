angular.module("apiApp").controller("newController", function ($scope, newSrv) {

    $scope.ControllerBroken = "ControllerWorks"
    $scope.ServiceBroken = newSrv.ServiceBroken


    $scope.getData = function () {
        newSrv.getData().then(function (response) {
            $scope.things = response.data
        })
    }
    $scope.getData()
})