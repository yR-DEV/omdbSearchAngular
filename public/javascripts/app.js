var app = angular.module("MovieSearchApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateURL: 'partials/main.html',
      controller: 'mainController'
    });
});
