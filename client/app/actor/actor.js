'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/actors/:_id', {
        templateUrl: 'app/actor/actor.html',
        controller: 'ActorCtrl'
      });
  });
