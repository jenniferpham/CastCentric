'use strict';

angular.module('castCentricApp')
  .controller('UpdateProfileCtrl', function ($scope, $http) {

    $http.get('api/actors').success(function(actor){
      $scope.actor = actor;
    });
    $scope.updateActorProfile = function(){
      $http.post('/api/actors',{
          Name: $scope.user.name,
          Email: $scope.user.email,
          ProfileImage: $scope.user.Image,
          Password: $scope.user.password,
          Role: {
            actor: $scope.user.actor,
            CastingDirector: $scope.user.CastingDirector,
            agent: $scope.user.agent
          },
          Location: $scope.user.location,
          WorkHistory:[{
            Title: $scope.user.title,
            RoleType: $scope.user.RoleType,
            Director: $scope.user.Director,
            Company: $scope.user.Company
          }],
          PhysicalAttribute: [{
            Gender: $scope.user.Gender,
            AgeRange:{
              Start: $scope.user.Start,
              End: $scope.user.End
            },
            Height: $scope.user.Height,
            Build: $scope.user.Build,
            Hair: $scope.user.Hair,
            Eyes: $scope.user.Eyes,
            Ethnicity: $scope.user.Ethnicity
          }],
          EducationTraining:[{
            School: $scope.user.School,
            Teacher: $scope.user.Teacher,
            Degree: $scope.user.Degree,
            Location: $scope.user.Location,
            Year: $scope.user.Year
          }]
        })
      $scope.user.name = '';
      $scope.user.email = '';
      $scope.user.Image = '';
      $scope.user.password = '';
      $scope.user.actor = '';
      $scope.user.CastingDirector = '';
      $scope.user.agent = '';
      $scope.user.location = '';
      $scope.user.title = '';
      $scope.user.RoleType = '';
      $scope.user.Director ='';
      $scope.user.Company = '';
      $scope.user.Gender = '';
      $scope.user.Start = '';
      $scope.user.End = '';
      $scope.user.Height = '';
      $scope.user.Build = '';
      $scope.user.Hair = '';
      $scope.user.Eyes = '';
      $scope.user.Ethnicity = '';
      EducationTraining:{
        $scope.user.School = '';
        $scope.user.Teacher = '';
        $scope.user.Degree = '';
        $scope.user.Location = '';
        $scope.user.Year = '';
      }
    }
    });
