'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/PostJob', {
        templateUrl: 'app/PostJob/PostJob.html',
        controller: 'PostJobCtrl'
      });
  });
