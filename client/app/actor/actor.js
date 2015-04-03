'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/actors', {
        templateUrl: 'app/actor/actor.html',
        controller: 'ActorCtrl'
      });
  });
