'use strict';

angular.module('castCentricApp')
  .controller('UpdateDirectorProfileCtrl', function ($scope, $http) {
    $http.get('api/directors').success(function (director) {
      $scope.director = director;
    });
    $scope.updateDirectorProfile = function () {
      $http.post('/api/directors', {
        Name: $scope.director.Name,
        Email: $scope.director.Email,
        Role: {
          actor: $scope.director.actor,
          CastingDirector: $scope.director.CastingDirector,
          agent: $scope.director.agent
        },
        Location: $scope.director.location,
        WorkHistory: [{
          Title: $scope.director.Title,
          Comapny: $scope.director.Company,
          Description: $scope.director.Description
        }],
        ProfileImage: $scope.director.ProfileImage,
        Education: [{
          School: $scope.director.School,
          Degree: $scope.director.Degree,
          Year: $scope.director.Year
        }],
        OpUrl: $scope.director.OpUrl
      })
    }
  });
