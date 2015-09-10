// app.factory('queryMovieTitle', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
//   console.log('hay');
// }])
//

// app.factory('queryMovieTitle', ['$scope', '$http', function($scope, $http) {
//   return function(title) {
//     console.log(title);
//   }
// }])

app.factory('QueryResults', ['$scope', '$http',
function($scope, $http) {
  return {
    passAlong: function(data) {
      return data;
    },
  };
}]);
