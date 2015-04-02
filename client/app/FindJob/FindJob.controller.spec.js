'use strict';

describe('Controller: FindJobCtrl', function () {

  // load the controller's module
  beforeEach(module('castCentricAppApp'));

  var FindJobCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FindJobCtrl = $controller('FindJobCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
