angular.module('app').controller('controller', function($scope){
  $scope.test = "one way binding"


$scope.crew = [
  {name: "daniel", rank: "guy"},
    {name: "joe", rank: "singer"},
      {name: "mick", rank: "drummer"},
        {name: "shea", rank: "bass"},
];
});
