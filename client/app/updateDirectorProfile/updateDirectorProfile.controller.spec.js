'use strict';

describe('Controller: UpdateDirectorProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('castCentricApp'));

  var UpdateDirectorProfileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateDirectorProfileCtrl = $controller('UpdateDirectorProfileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
