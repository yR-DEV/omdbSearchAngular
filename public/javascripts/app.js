var app = angular.module("MovieSearch", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "partials/noQuery.html",
      // controller: "MoviesController",
      controller: "SearchController"
    }).when('/movieSearch', {
      templateURL: "partials/moviesQuery.html",
      controller: "MoviesController",
      controller: "SearchController"
    }).when('/:id', {
      templateUrl: 'partials/titleQuery.html',
      controller: "SearchController",
      // controller: "TitleController"
    }).otherwise({redirectTo: '/'})
});
