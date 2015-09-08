app.controller("SearchController", function($scope, $http) {
  $scope.bool = false;
  $scope.showResultsBool = false;

  $scope.searchMovieTitle = function(title) {
    // console.log('in search');
    $http.get('http://www.omdbapi.com/?s=' + title)
      .then(function(data) {
        $scope.searchResult = data.data.search;
      }, function(data) {
        console.log('not data');
      });
    $scope.showResultsBool = true;
  };

});


app.controller("TitleQueryController", function($scope, $http) {
  // console.log($scope.bool);
})
