'use strict';

angular.module('castCentricApp')
  .controller('JobCtrl', function ($scope, $http, $routeParams) {
    $scope.jobs = [];

    //we're doing a filter on the array to find the matching name for the routeParams
    $http.get('/api/jobs').success(function(jobs){ //filters create a new array for all items that are true
      $scope.jobs = jobs.filter(function(selectedJobPost){ //selectedJobPost is the actual item from server in the ng-repeat and $routeParams is the :id created in routeprovider .config file
        return selectedJobPost._id === $routeParams.id; //_id because mongo lab automatically creates _id key
      })

    });

    console.log($scope.jobs);
  })

  .filter('sayYesNo', function(){
    return function(data){
      return data ? 'yes':'no'
    }
  })
  .filter('unionStatus', function(){
    return function(data){
      return data ? 'union':'non-union'
    }
  })
  .filter('compStatus', function(){
    return function(data){
      return data ? 'paid': 'unpaid'
    }
  })
