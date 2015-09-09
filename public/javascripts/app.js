var app = angular.module("MovieSearch", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "partials/moviesQuery.html",
      controller: "SearchController"
    }).when('/:id', {
      templateUrl: 'partials/titleQuery.html',
      controller: "SearchController"
    });
});
