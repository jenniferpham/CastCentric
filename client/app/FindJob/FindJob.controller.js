'use strict';

angular.module('castCentricApp')
  .controller('FindJobCtrl', function ($scope, $http) {
      $scope.jobs = [];

      $scope.search = {roles:{gender:"female"}};

      $http.get('/api/jobs').success(function(jobs){  //callback fcn - info from server comes back as called jobs
        $scope.jobs = jobs;  //makes jobs database from server available to the dom
      })
    })
  .filter("jobFilter", function(){
    return function(jobArray, roleObj) {
      //roleObj refers to user-input data from filter form
      if (roleObj) {
        var newJobs = [];
        for (var i = 0; i < jobArray.length; i++) {
          //check for any production criteria outside of roles object - may want to pass in productionObj that contains criteria for production
          var validRoleArray = [];
          var isValid = true;
          for (var j = 0; j < jobArray[i].roles.length; j++) {
            //specificRole refers to role inside my initial job array
            var specificRole = jobArray[i].roles[j];
            if (specificRole.gender && !(specificRole.gender === roleObj.gender)) {
              isValid = false;
            }
            ;
            /*if (roleObj.age.min && roleObj.age.max && !(specificRole.age >= roleObj.age.min && specificRole.age <= roleObj.age.max)){
             isValid=false;
             };*/
            if (roleObj.ethnicity && !(roleObj.ethnicity === specificRole.ethnicity)) {
              isValid = false;
            }
            ;
            if (isValid) {
              validRoleArray.push(specificRole);
            }
          }
          if (validRoleArray.length !== 0) {
            jobArray[i].roles = validRoleArray;
            newJobs.push(jobArray[i])
          }
        }

      };
      return jobArray
    }
  });
