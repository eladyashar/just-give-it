var app = angular.module('appModule', ["ngRoute"]);

app.controller('mainController', function($scope, $http) {

});

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "dashboard.html"
    })
    .when("/profile", {
        templateUrl : "profile.html"
    })
    .when("/map", {
        templateUrl : "map.html"
    })
    .when("/stores", {
        templateUrl : "stores.html"
    });
});

$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});