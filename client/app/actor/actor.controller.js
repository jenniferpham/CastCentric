'use strict';

angular.module('castCentricApp')
  .controller('ActorCtrl', function ($scope,$http, $routeParams) {

  	$scope.actors = []

  	$http.get('/api/actors').success(function(actors){
  		$scope.actors = actors.filter(function(filterItem){
  			return filterItem.Name === $routeParams.Name
  		})

  	});
  });
