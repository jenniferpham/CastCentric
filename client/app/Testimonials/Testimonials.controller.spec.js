'use strict';

describe('Controller: TestimonialsCtrl', function () {

  // load the controller's module
  beforeEach(module('castCentricApp'));

  var TestimonialsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestimonialsCtrl = $controller('TestimonialsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
