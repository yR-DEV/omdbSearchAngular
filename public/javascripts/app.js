var app = angular.module("MovieSearch", ['ngRoute', 'ngService']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "partials/titleQuery.html",
      controller: "TitleQueryController"
    });
});
