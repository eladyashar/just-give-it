var app = angular.module('login', []);

app.controller('loginController', function($scope, $http, $location) {
    $scope.signIn = function() {
        $http.post('/users/login', {username: $scope.username, password: $scope.password}).then(function() {
            alert("logged");
            document.location.assign('/views/homePage.html');
        })
    }
});