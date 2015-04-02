'use strict';

angular.module('castCentricApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
      {
        'title': 'Find Audition',
        'link': '/FindJob'
      },
      {
        'title': 'Find Talent',
        'link': '/FindTalent'
      },
      {
        'title': 'Find Agent',
        'link': '/FindAgent'
      },
      {
        'title': 'Testimonials',
        'link': '/Testimonials'
      }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
