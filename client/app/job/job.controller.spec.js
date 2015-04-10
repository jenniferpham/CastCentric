'use strict';

describe('Controller: JobCtrl', function () {

  // load the controller's module
  beforeEach(module('castCentricApp'));

  var JobCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JobCtrl = $controller('JobCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
