app.controller("SearchController", function($scope, $http) {

  $scope.searchMovieTitle = function(title) {
    $http.get('http://www.omdbapi.com/?s=' + title)
      .then(function(data) {
        $scope.results = data.data.search;
      }, function(data) {
        console.log('not data');
      })
  }

});
