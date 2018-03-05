var app = angular.module('register', []);

app.controller('registerController', function($scope, $http) {
    $scope.signUp = function() {
        $http.post("/users/signup", {username: $scope.userName,
                                   firstName: $scope.firstName,
                                   lastName: $scope.lastName,
                                   email: $scope.email,
                                   password: $scope.password}).then(function() {
                                       alert('New user Created')
                                   }, function() {
                                       alert("problem occured")
                                   })
    }
});