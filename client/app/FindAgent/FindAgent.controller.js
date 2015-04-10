'use strict';

angular.module('castCentricApp')
  .controller('FindAgentCtrl', function ($scope, $http) {
  $scope.agent = [];
  $http.get('/api/agencys').success(function(agent){
    $scope.agent = agent;
  })
  });
