'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/FindAgent', {
        templateUrl: 'app/FindAgent/FindAgent.html',
        controller: 'FindAgentCtrl'
      });
  });
