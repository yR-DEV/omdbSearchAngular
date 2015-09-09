var tempArr = [];

app.controller("SearchController", ['$scope', '$http', function($scope, $http) {
  $scope.searchMovieTitle = function(title) {
    $http.get('http://www.omdbapi.com/?s=' + title)
    .then(function(data) {
      $scope.titleQuery = '';
      $scope.results = data.data.Search;
      tempArr = data.data.Search;
      console.log($scope.results);
    });
  };

  $scope.titleInfoQuery = function(result) {
    $http.get('http://www.omdbapi.com/?i=' + result.imdbID)
    .then(function(data) {
      $scope.results = '';
      $scope.titleQuery = data.data;
    });


  };

}]);

console.log(tempArr);

app.controller("MoviesController", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.movies = "You are in movies controller/partial";
  console.log('in movie controller');
}]);


app.controller("TitleController", ['$scope', '$http', function($scope, $http) {
  console.log('in title controller');
}]);
