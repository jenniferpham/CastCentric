'use strict';

angular.module('castCentricApp')
  .controller('PostJobCtrl', function ($scope, $http) {

    $http.get('api/jobs').success(function(jobs){
      $scope.jobs = jobs;
    });
    $scope.addJob = function(){
     $http.post('/api/jobs', { production: { name:$scope.production.name, company: $scope.production.company, desc:$scope.production.desc, typee:$scope.production.typee, date:{ start:$scope.production.date.start, end:$scope.production.date.end}, loc:$scope.production.loc}, rehearsal: {date: {start:$scope.rehearsal.date.start, end:$scope.rehearsal.date.end}, loc:$scope.rehearsal.loc}, roles: [{charactername: $scope.roles.charactername, typee:$scope.roles.typee, gender:$scope.roles.gender, age:$scope.roles.age, ethnicity:$scope.roles.ethnicity, description:$scope.roles.description, nudity:$scope.roles.nudity, compensation:$scope.roles.compensation, union:$scope.roles.union, notes:$scope.roles.notes}], audition: {typee: $scope.audition.typee, date: {start:$scope.audition.date.start, end:$scope.audition.date.end}, loc:$scope.audition.loc}, activepost: {start:$scope.activepost.start, end:$scope.activepost.end}})}});

