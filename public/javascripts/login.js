var app = angular.module('login', []);

app.controller('loginController', function($scope, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.signIn = function() {
        alert("welcome!");
    }
});