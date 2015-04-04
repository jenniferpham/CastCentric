'use strict';

angular.module('castCentricApp')
  .controller('FindTalentCtrl', function ($scope,$http) {
    $scope.actors = [];

    $http.get('/api/actors').success(function(actors){
    	$scope.actors = actors
    })
  });
