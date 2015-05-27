angular.module("myApp", ['ngRoute', 'ui.bootstrap'])

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