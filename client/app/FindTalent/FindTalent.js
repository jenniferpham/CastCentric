'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/FindTalent', {
        templateUrl: 'app/FindTalent/FindTalent.html',
        controller: 'FindTalentCtrl'
      });
  });
