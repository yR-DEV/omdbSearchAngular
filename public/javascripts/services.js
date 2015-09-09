app.factory('queryMovieTitle', ['$scope', '$http', function($scope, $http) {
  return function(title) {
    console.log(title);
  }
}])
