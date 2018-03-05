
app.controller('dashController', function($scope, $http) {
    $scope.card = {
        title:"i need help to clean my house",
        description:"i have really really messy house",
        date:"12.12.1212"
    }
    $scope.isOffer = false;
    $scope.signIn = function() {
        alert("welcome!");
    }
});