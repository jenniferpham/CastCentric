'use strict';

angular.module('castCentricApp')
  .controller('FindTalentCtrl', function ($scope,$http,Auth) {
    $scope.actors = [];

    $http.get('/api/actors').success(function(actors){
    	$scope.actors = actors
    })

    $scope.isLoggedIn=Auth.isLoggedIn;
  });
