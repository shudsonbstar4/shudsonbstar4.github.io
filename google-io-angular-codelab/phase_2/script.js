// Code goes here

angular.module("myApp", ['ngRoute'])

.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'MainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]) 