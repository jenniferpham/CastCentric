'use strict';

angular.module('castCentricApp')
  .controller('JobCtrl', function ($scope, $http, $routeParams) {
    $scope.jobs = [];

    //we're doing a filter on the array to find the matching name for the routeParams
    $http.get('/api/jobs').success(function(jobs) {
      $scope.jobs = jobs.filter(function (selectedJobPost) {  //filters create a new array for all items that are true
        return selectedJobPost.id === $routeParams._id  //_id because mongo lab automatically creates _id key
      })
    })
  });
