'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/jobs/:id', {
        templateUrl: 'app/job/job.html',
        controller: 'JobCtrl'
      });
  });
