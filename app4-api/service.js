// angular.module('apiApp').service('myService', function($http){
//
//   this.getData = function(){
//     return $http.get({
//       method: "GET",
//       url: 'https://swapi.co/api/people'
//     }).then(function(result){
//
//       if(result.status != 200){
//         return "You broke somthing!"
//       }
//       console.log(result)
//       return result.data
//
//     });
//   }
// });
