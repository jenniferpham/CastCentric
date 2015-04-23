'use strict';

describe('Controller: UpdateAgentProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('castCentricApp'));

  var UpdateAgentProfileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateAgentProfileCtrl = $controller('UpdateAgentProfileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
