'use strict';

angular.module('castCentricAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/FindAgent', {
        templateUrl: 'app/FindAgent/FindAgent.html',
        controller: 'FindAgentCtrl'
      });
  });
