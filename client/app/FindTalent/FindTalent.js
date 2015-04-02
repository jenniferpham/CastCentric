'use strict';

angular.module('castCentricAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/FindTalent', {
        templateUrl: 'app/FindTalent/FindTalent.html',
        controller: 'FindTalentCtrl'
      });
  });
