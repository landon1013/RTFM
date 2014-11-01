var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/templates/login.html',
            controller: 'loginCtrl'
        })
        .when('/threads', {
            templateUrl: '/templates/',
            controller: ''
        })
        .when('/threads/:threadId', {
            templateUrl: '/templates/',
            controller: ''
        })
        .otherwise({
            redirectTo: '/login'
        })
});