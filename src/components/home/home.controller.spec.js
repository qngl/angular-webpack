'use strict'

/* eslint-env jasmine */

describe('HomeController', function () {
  var $controller, $rootScope, $scope

  beforeEach(angular.mock.module('home.module'))

  beforeEach(angular.mock.inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_
    $rootScope = _$rootScope_
    $scope = $rootScope.$new()
    $controller('HomeController as vm', {
      $scope: $scope
    })
  }))

  it('should load HomeController', function () {
    expect($scope.vm).toBeDefined()
  })

  it('sum should work well', function () {
    $scope.vm.x = 2
    $scope.vm.y = 3
    $scope.vm.sum()
    expect($scope.vm.z).toBe(5)
  })
})
