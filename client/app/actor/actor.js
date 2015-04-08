'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/actors/:Name', {
        templateUrl: 'app/actor/actor.html',
        controller: 'ActorCtrl'
      });
  });
