'use strict';

angular.module('castCentricApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Testimonials', {
        templateUrl: 'app/Testimonials/Testimonials.html',
        controller: 'TestimonialsCtrl'
      });
  });
