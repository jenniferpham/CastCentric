'use strict';

describe('Controller: UpdateProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('castCentricApp'));

  var UpdateProfileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateProfileCtrl = $controller('UpdateProfileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
