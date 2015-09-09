app.controller("SearchController", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.searchMovieTitle = function(title) {
    $http.get('http://www.omdbapi.com/?s=' + title)
    .then(function(data) {
      $scope.results = data.data.Search;
      // console.log($scope.imdbQuery);
    });
  };

  $scope.singleTitleQuery = function() {
    console.log('instq');
  }


}]);

app.controller("MoviesController", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

}])


app.controller("TitleController", ['$scope', '$http', function($scope, $http) {

}]);
