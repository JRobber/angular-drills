angular.module('apiApp').controller("myCtrl", function($scope, $http){

  $scope.test = "It's alive!!!"


  $http.get("https://swapi.co/api/people").then(function(response){
    console.log(response);


      $scope.data = response.data.results



})
})
