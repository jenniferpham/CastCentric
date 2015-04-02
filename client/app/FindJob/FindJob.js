'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/FindJob', {
        templateUrl: 'app/FindJob/FindJob.html',
        controller: 'FindJobCtrl'
      });
  });
