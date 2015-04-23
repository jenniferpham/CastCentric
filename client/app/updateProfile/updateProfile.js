'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/updateProfile', {
        templateUrl: 'app/updateProfile/updateProfile.html',
        controller: 'UpdateProfileCtrl'
      });
  });
