'use strict';

angular.module('castCentricApp')
  .controller('FindJobCtrl', function ($scope, $http, Auth) {
    $scope.jobs = [];

    $http.get('/api/jobs').success(function (jobs) {  //callback fcn - info from server comes back as called jobs
      $scope.jobs = jobs;  //makes jobs database from server available to the dom
    });

    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.startover = function (form) {
      form.$setPristine();
      $scope.rolesearch = {};
      $scope.prodsearch={};
    };
  })

  .controller('ModalDemoCtrl', function ($scope, $modal, $log) {
    $scope.open = function () {
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl'
      });
      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  })

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

  .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  })

/*  .filter("jobItemFilter", function(){
    return function (existingJobArray, filterForm){
      if (filterForm.$pristine === true) {  //if the filter form is not changed yet
        return existingJobArray
      }
      else {
        var filteredJobArray = [];  //make an empty array to push filtered items in and return this array later on
        for (var i=0; i<existingJobArray.length; i++){   //looking inside each jobitem
          var roleItems = existingJobArray[i].roles;
          if (roleItems.length > 0) {  //if there are roles for that production
            alert("no roles")
        }

        }
      }
    }
  })*/

  .filter("jobFilter", function() {
    return function (existingJobArray, filterForm, filterProdItem, filterInput) {  //first parameter will be existingJobArray coming from "ng-repeat='job in jobs'"
      if (filterForm.$pristine === true) {  //if the filter form is not changed yet
        return existingJobArray
      }
      else {  //if user has interacted with filterform
        var filteredJobArray = [];  //make an empty array to push filtered items in and return this array later on
        // angular.forEach(existingJobArray, function(prodsearch){

        for (var i = 0; i < existingJobArray.length; i++) { //loop through existingJobArray first - in productionobjects of existingjobarray
          var filteredRoleArray = [];  //this will go inside of jobItem
          var jobItem = existingJobArray[i];
          var validRole = true;

          if ((filterForm.production_type.$dirty) && (filterProdItem.production.typee !== jobItem.production.typee)){
            validRole=false;
          };
        /*  if (filterProdItem.production.typee &&  (filterProdItem.production.typee !== jobItem.production.typee)){
            validRole=false;
          } //PROBABLY GONNA BE WRONG BECAUSE IT"S THE KEY INSIDE TEH TYPEE THAT IS SET TO TRUE
*/
          //loop through rolecharacters object inside of rolesarray
          for (var j = 0; j < existingJobArray[i].roles.length; j++) {
              var roleCharacter = {};
              roleCharacter = existingJobArray[i].roles[j]; //setting this to a role object inside of the roles array inside of jobarray

              //compare filterInput fields to the roleCharacter fields - if it doesn't match any available, validRole will be false, and it will not display anything

            if ((filterForm.gender.$dirty) && (filterInput.gender !== roleCharacter.gender)){
              validRole=false;
            };
            if ((filterForm.min_age.$dirty && (roleCharacter.age > filterInput.age.max)) || (filterForm.max_age.$dirty) && (roleCharacter.age < filterInput.age.min)){
              validRole=false;
            };
            if ((filterForm.ethnicity.$dirty) && (filterInput.ethnicity !== roleCharacter.ethnicity)){
              validRole=false;
            };
            if ((filterForm.roletype.$dirty) && (filterInput.typee !== roleCharacter.typee)){
              validRole=false;
              //get which keys are equal to true
              // match that key with roleCharacter.typee string
            };

            if ((filterForm.compensation.$dirty) && (filterInput.compensation !== roleCharacter.compensation)) {
              validRole = false
            };

            if ((filterForm.union.$dirty) && (filterInput.union !== roleCharacter.union)) {
                validRole = false
              };
            if ((filterForm.audition_location.$dirty) && !(filterInput.audition.loc === roleCharacter.audition.loc)){
              validRole=false;
            }


              //For text dropdown menu - check if field is valid using formName.formfieldName.$valid
              /*if ((filterForm.auditionlocation.$dirty) && !(filterInput.audition.loc === roleCharacter.audition.loc)){
                validRole = false
              };*/
              /*



*/

            /*Xmatch role-age <= role.age.max or >= role.age.min
            * match role.ethnicity to ethnicity (careful for true/false checkboxes versus a an array or string
            * match Object - production.typee to theater, movies, tv, or commercial
            * Xmatch role.typee (lead, supporting, background)
            * Xmatch compensation (just checkboxes - true/false, paid/unpaid)
          * Xmatch union status (t/f checkboxes
            * Xaudition location to audition.loc*/
              if (validRole){
                filteredRoleArray.push(roleCharacter);  //pushes all roleCharacter into filteredRoleArray that matches by gender so now you will have all roles

              };
        }

          if (filteredRoleArray.length > 0) {  //if there are role arrays that meet the existing conditions, then add that production to the filteredJobArray. otherwise, don't show it.
            jobItem.roles = filteredRoleArray;  //the roles property of that jobitem or production item will be replaced with new filteredRoleArray
            filteredJobArray.push(jobItem);
          }

        };
        return filteredJobArray;   //this is outside of the forloop
        /*   match role-gender (string)
         * match role-age <= role.age.max or >= role.age.min
         * match role.ethnicity to ethnicity (careful for true/false checkboxes versus a an array or string
         * match Object - production.typee to theater, movies, tv, or commercial
         * match role.typee (lead, supporting, background)
         * match compensation (just checkboxes - true/false, paid/unpaid)
         * match union status (t/f checkboxes
         * audition location to audition.loc
         * keywords - match to any word in all fields
         * IF they match the above, add them to the role object or hte production object
         */


      }
    }
  })

  .filter("jobFilterSylvester", function(){
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
        return jobArray
      };

    }
  })
