'use strict';

angular.module('castCentricAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
          .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          })

          .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthController'
          })
          .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthController'
          })
          .when('/FindJob', {
            templateUrl: 'app/FindJob/FindJob.html',
            controller: 'FindJobCtrl'
          })
          .when('/FindTalent', {
            templateUrl: 'app/FindTalent/FindTalent.html',
            controller: 'FindTalentCtrl'
          })
          .when('/FindAgent', {
            templateUrl: 'app/FindAgent/FindAgent.html',
            controller: 'FindAgentCtrl'
          })
      .when('/Testimonials', {
        templateUrl: 'app/Testimonials/Testimonials.html',
        controller: 'TestimonialsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
