'use strict';

angular.module('castCentricAppApp')
  .controller('NavbarCtrl', function ($scope, $location) {
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

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
