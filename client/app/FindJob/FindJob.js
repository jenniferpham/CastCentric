'use strict';

angular.module('castCentricAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/FindJob', {
        templateUrl: 'app/FindJob/FindJob.html',
        controller: 'FindJobCtrl'
      });
  });
