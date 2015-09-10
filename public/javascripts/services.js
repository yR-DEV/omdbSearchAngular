// app.factory('queryMovieTitle', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
//   console.log('hay');
// }])
//

// app.factory('queryMovieTitle', ['$scope', '$http', function($scope, $http) {
//   return function(title) {
//     console.log(title);
//   }
// }])

app.factory('MovieQuery', ['$scope', '$http', function($scope, $http) {
  console.log('in factory');
}]);
