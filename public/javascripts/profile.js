
app.controller('profileController', function($scope, $http) {
    $scope.update = function(username) {
        $http.put("/users/"+username, {username: $scope.userName,
                                   firstName: $scope.firstName,
                                   lastName: $scope.lastName,
                                   email: $scope.email,
                                   password: $scope.passward})
    }
});