// app.controller("SearchController", function($scope, $http) {
//
//   // $scope.searchMovieTitle = function(title) {
//     // console.log(title);
//
//     $scope.callTitleSearch = function(title) {
//       searchTitle(title);
//     }
//
//     // $http.get('http://www.omdbapi.com/?s=' + title)
//     // .then(function(data) {
//     //   // console.log(data);
//     //   return $scope.results = data.data.Search;
//     // }, function(data) {
//     //   return console.log('no data');
//     // });
//     // console.log($scope.results);
//
//   // }
//   // console.log($scope.results);
//
// });
var resutls = [];

app.controller("SearchController", ['$scope', '$http', function($scope, $http) {
  $scope.searchMovieTitle = function(title) {
    $http.get('http://www.omdbapi.com/?s=' + title)
    .then(function(data) {
      console.log(data);
      $scope.results = data.data.Search;
    });
  };

  $scope.queryMovieInfo = function(movieTitleID) {
    $http.get('http://www.imdbapi.com/?i=' + movieTitleID)
    .then(function(data) {
      console.log(data.data);
    })
    // console.log(movieTitle);
  }


  // app.controller("TitleQueryController", ['$scope', '$http', function($scope, $http) {
  //   $scope.searchTitles = function(title) {
  //     console.log(title);
  //   }
  // }])


}]);
