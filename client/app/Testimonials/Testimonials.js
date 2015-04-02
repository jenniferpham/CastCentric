'use strict';

angular.module('castCentricAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Testimonials', {
        templateUrl: 'app/Testimonials/Testimonials.html',
        controller: 'TestimonialsCtrl'
      });
  });
