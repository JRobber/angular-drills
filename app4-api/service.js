angular.module("apiApp").service("newSrv", function ($http) {
    this.ServiceBroken = "ServiceWorks"

this.getData = function (){
    return $http.get("http://swapi.co/api/people/1/")
}

})