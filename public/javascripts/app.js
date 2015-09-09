var app = angular.module("MovieSearch", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "partials/moviesQuery.html",
      controller: "SearchController"
    });
});
