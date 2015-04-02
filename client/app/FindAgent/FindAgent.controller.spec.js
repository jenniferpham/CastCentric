'use strict';

describe('Controller: FindAgentCtrl', function () {

  // load the controller's module
  beforeEach(module('castCentricApp'));

  var FindAgentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FindAgentCtrl = $controller('FindAgentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
