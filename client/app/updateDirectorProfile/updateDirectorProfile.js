'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/updateDirectorProfile', {
        templateUrl: 'app/updateDirectorProfile/updateDirectorProfile.html',
        controller: 'UpdateDirectorProfileCtrl'
      });
  });
