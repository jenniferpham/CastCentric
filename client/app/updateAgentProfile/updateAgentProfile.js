'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/updateAgentProfile', {
        templateUrl: 'app/updateAgentProfile/updateAgentProfile.html',
        controller: 'UpdateAgentProfileCtrl'
      });
  });
