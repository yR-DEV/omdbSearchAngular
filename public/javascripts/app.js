var app = angular.module("MovieSearch", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "partials/titleQuery.html",
      controller: "TitleQueryController"
    });
});
