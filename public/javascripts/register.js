var app = angular.module('register', []);

app.controller('registerController', function($scope, $http) {
    $scope.signUp = function() {
        $http.post("/users/post", {username: $scope.userName,
                                   firstName: $scope.firstName,
                                   lastName: $scope.lastName,
                                   email: $scope.email,
                                   password: $scope.pasward})
    }
});