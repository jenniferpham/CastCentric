'use strict';

angular.module('castCentricApp')
  .controller('ActorCtrl', function ($scope,$http, $routeParams) {

  	$scope.actors = [];

  	//we're doing a filter on the array to find the matching name for the routeParams
  	$http.get('/api/actors').success(function(actors){
  		$scope.actors = actors.filter(function(filterActor){
  			return filterActor.Name === $routeParams.Name
  		})

  	});
  });
