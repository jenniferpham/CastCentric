'use strict';

angular.module('castCentricApp')
  .controller('FindJobCtrl', function ($scope, $http) {
      $scope.jobs = [];

      $http.get('/api/jobs').success(function(jobs){  //callback fcn - info from server comes back as called jobs
        $scope.jobs = jobs;  //makes jobs database from server available to the dom
      })
    });
