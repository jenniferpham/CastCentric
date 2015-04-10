'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/job/:id', {
        templateUrl: 'app/job/job.html',
        controller: 'JobCtrl'
      });
  });
