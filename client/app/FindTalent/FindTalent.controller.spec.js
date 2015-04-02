'use strict';

describe('Controller: FindTalentCtrl', function () {

  // load the controller's module
  beforeEach(module('castCentricAppApp'));

  var FindTalentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FindTalentCtrl = $controller('FindTalentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
