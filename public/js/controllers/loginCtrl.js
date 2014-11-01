angular.module('rtfmApp').controller('loginCtrl', function($scope, EnvironmentService, $location) {

    $scope.logMeIn = function(username) {
        alert(username);
    };

    $scope.env = EnvironmentService.getEnv();

    $location.path("/threads");

    });