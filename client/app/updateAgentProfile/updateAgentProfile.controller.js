'use strict';

angular.module('castCentricApp')
  .controller('UpdateAgentProfileCtrl', function ($scope, $http) {
    $http.get('api/agencys').success(function (agent) {
      $scope.director = agent;
  });
$scope.updateAgentProfile = function(){
  $http.post('/api/agencys', {
    Name: $scope.agent.Name,
    Company: $scope.agent.Company,
    Email: $scope.agent.Email ,
    Location: $scope.agent.Location,
    Description: $scope.agent.Description,
    Image: $scope.agent.Image
  })
    $scope.agent.Name ='';
    $scope.agent.Company ='';
    $scope.agent.Email ='';
    $scope.agent.Location ='';
    $scope.agent.Description ='';
    $scope.agent.Image ='';
}
});
